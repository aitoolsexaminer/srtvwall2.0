let currentMainSrc = "";
let mainMuted = false;
let isFullscreen = false;
/* ✅ ADDED */
let interactiveMode = false;
// -----------------------------
let ytPlayer = null; // <- add here, global scope
// -----------------------------

/* ========================= MUTE HELPER ========================= */
function setMute(src, mute) {
  if (!src) return src;
  src = src.replace("mute=0", "").replace("mute=1", "");
  return src.includes("?") ? `${src}&mute=${mute ? 1 : 0}` : `${src}?mute=${mute ? 1 : 0}`;
}

/* ========================= OVERLAY CONTROL ========================= */
/* ✅ ADDED */
function enableMainOverlay(enable) {
  const overlay = document.getElementById("mainFeedOverlay");
  if (!overlay) return;
  overlay.style.pointerEvents = enable ? "auto" : "none";
}

/* ========================= ACTIVATE TILE ========================= */
function activateTile(number) {
  const mainFrame = document.getElementById("mainFeedFrame");
  const mainVideo = document.getElementById("mainFeedVideo");
  const tile = document.querySelector(`.dashboard .tile[data-number="${number}"]`);
  if (!tile) return;
  const player = tile.querySelector("iframe, video");
  if (!player) return;

  // Enable overlay control
  enableMainOverlay(true);
  interactiveMode = false;

  // Highlight the active tile
  document.querySelectorAll(".dashboard .tile").forEach(t => t.classList.remove("on-air"));
  tile.classList.add("on-air");

  const mainFeed = document.querySelector(".main-feed");
  if (mainFeed) mainFeed.classList.add("has-broadcast");

  // Hide the legend
  const legend = document.querySelector(".main-feed .legend");
  if (legend) legend.style.display = "none";

  // ====================== YOUTUBE IFRAME ======================
  if (player.tagName === "IFRAME" && player.src.includes("youtube.com")) {
    const src = player.getAttribute("src");
    if (!src) return;

    // Stop main video
    if (mainVideo) {
      mainVideo.pause();
      mainVideo.src = "";
      mainVideo.style.display = "none";
    }

    // Show iframe
    mainFrame.style.display = "block";

    // Destroy previous YouTube player if exists
    if (ytPlayer) {
      ytPlayer.destroy();
      ytPlayer = null;
    }

    // Try to extract a videoId for embed/live_stream URLs
    let videoId = null;

    // Standard video embed
    const embedMatch = src.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch) videoId = embedMatch[1];

    // Live stream via channel
    const liveMatch = src.match(/live_stream\?channel=([a-zA-Z0-9_-]+)/);
    if (liveMatch) videoId = null; // cannot use YT.Player API for live streams

    if (videoId) {
      // Use YouTube API for standard embed
      ytPlayer = new YT.Player('mainFeedFrame', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          mute: mainMuted ? 1 : 0
        },
        events: {
          'onReady': function(event) {
            event.target.playVideo();
            if (!mainMuted) event.target.unMute();
          }
        }
      });
    } else {
      // Live stream or non-standard embed, just set iframe src
      mainFrame.innerHTML = "";
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      mainFrame.appendChild(iframe);
    }
    currentMainSrc = src;
  }
  // ====================== VIDEO PLAYER (HLS, MP4, WebM, Blob) ======================
  else if (player.tagName === "VIDEO") {
    const tile = player.closest(".tile");
    const channelId = tile?.dataset.channelId;
    const channel = channels.find(c => c.id == channelId);
    if (!channel) return;

    // Hide iframe
    if (mainFrame) {
      mainFrame.style.display = "none";
      mainFrame.innerHTML = ""; // clear old iframe
    }

    // Show main video
    mainVideo.style.display = "block";

    // Destroy previous HLS if any
    if (window.mainHls) {
      window.mainHls.destroy();
      window.mainHls = null;
    }

    // ====================== Handle Different Video Types ======================
    // HLS stream
    if (channel.type === "hls" || (channel.src && channel.src.includes(".m3u8"))) {
      if (typeof Hls !== "undefined" && Hls.isSupported()) {
        window.mainHls = new Hls();
        window.mainHls.loadSource(channel.src);
        window.mainHls.attachMedia(mainVideo);
      } else {
        mainVideo.src = channel.src;
      }
    }
    // Blob / MP4 / WebM
    else if (channel.type === "blob" || /\.(mp4|webm)$/i.test(channel.src)) {
      mainVideo.src = channel.src;
    }
    // Generic iframe embedded as video (rare)
    else {
      console.warn("Unknown video type for main tile:", channel);
      mainVideo.src = channel.src || "";
    }

    mainVideo.muted = mainMuted;
    mainVideo.autoplay = true;
    mainVideo.playsInline = true;
    mainVideo.controls = false;
    mainVideo.play().catch(() => {});
    currentMainSrc = channel.src;
  }
  // ====================== GENERIC IFRAME ======================
  else if (player.tagName === "IFRAME") {
    const src = player.src;
    if (!src) return;

    // stop video
    if (mainVideo) {
      mainVideo.pause();
      mainVideo.src = "";
      mainVideo.style.display = "none";
    }

    // destroy previous YT instance
    if (ytPlayer) {
      ytPlayer.destroy();
      ytPlayer = null;
    }

    // clear previous content
    mainFrame.innerHTML = "";
    mainFrame.style.display = "block";

    // create new iframe
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    mainFrame.appendChild(iframe);
    currentMainSrc = src;
  }
}

/* ========================= CONTROL FUNCTIONS ========================= */
function toggleFullscreen() {
  const target = document.querySelector(".tile.main-feed") || document.documentElement;
  const fullscreenBtn = document.querySelector('.control-btn[data-control="fullscreen"]');
  if (!isFullscreen) {
    if (target.requestFullscreen) target.requestFullscreen();
    else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    else if (target.msRequestFullscreen) target.msRequestFullscreen();
    isFullscreen = true;
    fullscreenBtn?.classList.add("active");
    document.body.classList.add("fullscreen-active");
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    isFullscreen = false;
    fullscreenBtn?.classList.remove("active");
    document.body.classList.remove("fullscreen-active");
  }
}

function toggleMute() {
  const mainFrame = document.getElementById("mainFeedFrame");
  const mainVideo = document.getElementById("mainFeedVideo");
  const muteBtn = document.querySelector('.control-btn[data-control="mute"]');
  mainMuted = !mainMuted;
  muteBtn?.classList.toggle("mute", mainMuted);
  muteBtn?.classList.toggle("unmute", !mainMuted);
  if (mainVideo?.style.display !== "none") {
    mainVideo.muted = mainMuted;
  }
  if (mainFrame && currentMainSrc) {
    const iframe = mainFrame.querySelector("iframe");
    if (iframe && currentMainSrc) {
      iframe.src = setMute(currentMainSrc, mainMuted);
    }
  }
}

function toggleDim() {
  const dimBtn = document.querySelector('.control-btn[data-control="dim"]');
  document.body.classList.toggle("dim-mode");
  dimBtn?.classList.toggle("active");
}

/* ========================= ATTACH CONTROL BUTTONS IMMEDIATELY ========================= */
function attachControlButtons() {
  document.addEventListener('click', (e) => {
    const fullscreenBtn = e.target.closest('.control-btn[data-control="fullscreen"]');
    const muteBtn = e.target.closest('.control-btn[data-control="mute"]');
    const dimBtn = e.target.closest('.control-btn[data-control="dim"]');
    if (fullscreenBtn) {
      e.preventDefault();
      toggleFullscreen();
    }
    if (muteBtn) {
      e.preventDefault();
      toggleMute();
    }
    if (dimBtn) {
      e.preventDefault();
      toggleDim();
    }
  });
}

/* ========================= SINGLE KEYBOARD HANDLER ========================= */
document.addEventListener("keydown", (e) => {
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
  const key = e.key.toLowerCase();
  switch(key) {
    case "f":
      e.preventDefault();
      toggleFullscreen();
      break;
    case "m":
      e.preventDefault();
      toggleMute();
      break;
    case "d":
      e.preventDefault();
      toggleDim();
      break;
    case "s":
      e.preventDefault();
      const settingsModal = document.getElementById("Modal");
      if (settingsModal) {
        settingsModal.style.display = settingsModal.style.display === "block" ? "none" : "block";
      }
      break;
    /* ✅ ADDED */
    case "i":
      e.preventDefault();
      interactiveMode = !interactiveMode;
      enableMainOverlay(!interactiveMode);
      console.log("Interactive mode:", interactiveMode ? "ON" : "OFF");
      break;
  }
});

/* ========================= DOM READY ========================= */
document.addEventListener("DOMContentLoaded", () => {
  attachControlButtons();
  const startBtn = document.getElementById("startOk");
  const startScreen = document.getElementById("startScreen");

  function startDashboard() {
    if (startScreen) startScreen.style.display = "none";
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    // setTimeout(initDashboard, 100);
    initDashboard();
  }

  if (startBtn) {
    startBtn.addEventListener("click", startDashboard);
  }

  /* ========================= ABOUT ========================= */
  const aboutLink = document.getElementById("about-link");
  const aboutClose = document.getElementById("about-close");
  const startContent = document.querySelector(".start-content");
  if (aboutLink && aboutClose && startContent) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      startContent.classList.add("show-about");
    });
    aboutClose.addEventListener("click", () => {
      startContent.classList.remove("show-about");
    });
  }

  /* ========================= CITY SEARCH ========================= */
  document.querySelectorAll(".city-search").forEach(input => {
    const results = input.closest(".settings-option-row")?.querySelector(".city-results");
    if (!results) return;
    input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      results.innerHTML = "";
      if (!value) return;
      const matches = cities.filter(c => c.name.toLowerCase().includes(value)).slice(0, 8);
      matches.forEach(city => {
        const div = document.createElement("div");
        div.textContent = city.name;
        div.addEventListener("click", () => {
          input.value = city.name;
          results.innerHTML = "";
          const slot = parseInt(input.dataset.slot);
          const zoneId = zoneSlots[slot];
          zones[zoneId] = city.tz;
          const label = document.querySelector(`.clock-option-clock[data-clock-label="${zoneId}"]`);
          if (label) label.textContent = city.label;
          updateWorldClock();
        });
        results.appendChild(div);
      });
    });
  });

  /* ========================= CHANNEL PICKER INIT ========================= */
  populateChannelPicker();

  const channelSections = document.querySelectorAll(".chan");
  channelSections.forEach(section => {
    section.addEventListener("toggle", () => {
      if (section.open) {
        channelSections.forEach(other => {
          if (other !== section) other.open = false;
        });
      }
    });
  });

  /* ✅ ADD IT RIGHT HERE */
  document.querySelectorAll(".channel-plus-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const slot = btn.dataset.slot;

      // set active input
      window.activeChannelInput = document.querySelector(
        `.channel-search[data-slot="${slot}"]`
      );

      // open modal
      const modal = document.getElementById("channelPickerModal");
      if (modal) modal.style.display = "block";
    });
  });

document.querySelectorAll(".channel-search").forEach(input => {
  const results = input.closest(".settings-option-row")?.querySelector(".channel-results");
  if (!results) return;

  input.addEventListener("input", () => {
    let value = input.value.toLowerCase();

    // ✅ REMOVE PREFIX before searching
    value = value.replace(/^ch\s*\d+\s*-\s*/i, "");

    results.innerHTML = "";
    if (!value) return;

    const matches = channels
      .filter(c => c.name.toLowerCase().includes(value))
      .slice(0, 8);

    matches.forEach(channel => {
      const div = document.createElement("div");
      div.textContent = channel.name;

      div.addEventListener("click", () => {
        window.activeChannelInput = input;
        assignChannelToSlot(channel);
        results.innerHTML = "";
      });

      results.appendChild(div);
    });
  });
});
});

/* ========================= DASHBOARD RESIZE ========================= */
function resizeDashboard() {
  const dashboard = document.querySelector(".dashboard");
  if (!dashboard) return;
  const baseWidth = 1920;
  const baseHeight = 780;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const scale = Math.min(screenWidth / baseWidth, screenHeight / baseHeight);
  dashboard.style.transform = `scale(${scale})`;
}

/* ========================= DASHBOARD INIT ========================= */
function initDashboard() {
  // if (!document.querySelector(".dashboard .tile")) {
  //   setTimeout(initDashboard, 200);
  //   return;
  // }
  buildChannels();
  attachBroadcastEvents();
  const mainFrame = document.getElementById("mainFeedFrame");
  window.addEventListener("resize", resizeDashboard);
  window.addEventListener("load", resizeDashboard);
  resizeDashboard();

  /* ========================= TILE BROADCAST ICONS ========================= */
  document.querySelectorAll(".tile[data-number]").forEach(tile => {
    const icon = tile.querySelector(".broadcast-icon");
    if (!icon) return;
    icon.addEventListener("click", () => {
      const number = tile.dataset.number;
      if (number) activateTile(number);
    });
  });

  /* ========================= MUTE ALL TILES ========================= */
  document.querySelectorAll(".tile iframe").forEach(frame => {
    if (frame === mainFrame) return;
    frame.src = setMute(frame.getAttribute("src"), true);
  });

  /* ========================= AUTO REFRESH STREAMS ========================= */
  setInterval(() => {
    document.querySelectorAll(".tile iframe").forEach(frame => {
      if (!frame.src) return;
      frame.src = frame.src;
    });
  }, 300000);
}

/* ========================= CHANNEL FUNCTIONS ========================= */
function populateChannelPicker() {
  const containers = {
    arabic: document.querySelector("#topic-arabic .chan-list"),
    lebanese: document.querySelector("#topic-lebanese .chan-list"),
    gulfarabregion: document.querySelector("#topic-gulfarabregion .chan-list"),
    intnews: document.querySelector("#topic-intnews .chan-list"),
    businessfinance: document.querySelector("#topic-businessfinance .chan-list"),
    sciencespace: document.querySelector("#topic-sciencespace .chan-list"),
    doclifestyle: document.querySelector("#topic-doclifestyle .chan-list"),
    sports: document.querySelector("#topic-sports .chan-list"),
    ent: document.querySelector("#topic-ent .chan-list")
  };

  channels.forEach(channel => {
    const item = document.createElement("div");
    item.className = "channel-option";
    item.textContent = channel.name;
    item.addEventListener("click", () => {
      assignChannelToSlot(channel);
    });
    const target = containers[channel.group];
    if (target) target.appendChild(item);
  });
}

window.activeChannelInput = null;
const channelPickerModal = document.getElementById("channelPickerModal");

function assignChannelToSlot(channel) {
  if (!channel || !channel.name) return;
  if (!window.activeChannelInput) return;

  const input = window.activeChannelInput;

  // ✅ ALWAYS get prefix from placeholder (never from value)
  const prefixMatch = input.placeholder.match(/^CH\s*\d+\s*-\s*/i);
  const prefix = prefixMatch ? prefixMatch[0] : "";

  // ✅ Set value with prefix + selected channel
  input.value = prefix + channel.name;

  const slot = input.dataset.slot;
  loadChannelIntoTile(slot, channel);

  // Close modal
  if (channelPickerModal) channelPickerModal.style.display = "none";
}

function loadChannelIntoTile(slot, channel) {
  const slotIndex = parseInt(slot, 10); // ✅ ensure number

   // ✅ ADD LOGS RIGHT HERE
  console.log("Looking for tile with slot:", slotIndex);
  console.log("All tiles:", document.querySelectorAll(".tile"));

  const tile = document.querySelector(
    `.dashboard .tile[data-slot-index="${slotIndex}"]`
  );

  if (!tile) {
    console.warn("Tile not found for slot:", slotIndex);
    return;
  }
  const inner = tile.querySelector(".tile-inner");
  inner.innerHTML = "";
  let player;

  if (channel.type === "youtube") {
    player = document.createElement("iframe");
    if (channel.videoId) {
      player.src = `https://www.youtube.com/embed/${channel.videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1`;
    } else if (channel.channelId) {
      player.src = `https://www.youtube.com/embed/live_stream?channel=${channel.channelId}&autoplay=1&mute=1&playsinline=1`;
    }
    player.allow = "autoplay; encrypted-media; picture-in-picture";
  } else if (channel.type === "hls") {
    player = document.createElement("video");
    player.autoplay = true;
    player.muted = true;
    if (typeof Hls !== 'undefined' && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(channel.src);
      hls.attachMedia(player);
    } else {
      player.src = channel.src;
    }
  }
  // ===================== MP4 / WebM =====================
  else if (channel.type === "blob") {
    player = document.createElement("video");
    setupVideo(player); // optional, if you have reusable setup
    const src = channel.fetchUrl || channel.src;
    if (!src) {
      showFallback(player, channel);
      return player;
    }
    player.src = src;
    player.autoplay = true;
    player.muted = true;
    player.controls = false;
    player.playsInline = true;
    // Catch fatal decoding errors
    player.onerror = () => showFallback(player, channel);
    // Catch stalled / buffering failures
    player.onstalled = () => showFallback(player, channel);
    // Catch autoplay / decode failures
    player.onloadedmetadata = () => {
      if (player.duration === 0 || isNaN(player.duration)) {
        showFallback(player, channel);
        return;
      }
      player.play().catch(() => showFallback(player, channel));
    };
  }
  // ===================== GENERIC IFRAME =====================
  else {
    player = document.createElement("iframe");
    player.src = channel.src;
    player.allow = "autoplay; encrypted-media; picture-in-picture";
    // Many iframe errors are silent, so use timeout fallback
    setTimeout(() => {
      if (!player.contentWindow) {
        showFallback(player, channel);
      }
    }, 4000);
  }
  inner.appendChild(player);
  // ✅ keep tile metadata updated
  tile.dataset.channelId = channel.id;
}

/* ========================= CHANNEL OVERLAY ========================= */
let channelBuffer = "";
let channelTimer = null;
const overlay = document.getElementById("channelOverlay");

function showChannelOverlay(text) {
  if (!overlay) return;
  overlay.textContent = "CH " + text;
  overlay.classList.add("show");
}

function hideChannelOverlay() {
  if (overlay) overlay.classList.remove("show");
}

document.addEventListener("keydown", (e) => {
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
  if (!/^[0-9]$/.test(e.key)) return;
  channelBuffer += e.key;
  showChannelOverlay(channelBuffer);
  clearTimeout(channelTimer);
  channelTimer = setTimeout(() => {
    const typedNumber = parseInt(channelBuffer, 10);
    const tile = document.querySelector(`.dashboard .tile[data-number="${typedNumber}"]`);
    if (tile) activateTile(typedNumber);
    hideChannelOverlay();
    channelBuffer = "";
  }, 600);
});

/* ========================= Generate the site list ========================= */
const siteListContainer = document.querySelector(".site-list");

function renderSites() {
  siteListContainer.innerHTML = "";
  sites.forEach(site => {
    const item = document.createElement("div");
    item.className = "site-item";
    item.textContent = site.name;
    item.addEventListener("click", () => {
      setSiteToSlot(site, activeSiteSlot);
      const siteModal = document.getElementById("sitePickerModal");
      if (siteModal) siteModal.style.display = "none";
    });
    siteListContainer.appendChild(item);
  });
}
renderSites();

/* ========================= Connect sites to inputs + iframes - Auto-highlight selected site ========================= */
function setSiteToSlot(siteOrUrl, slot) {
  if (slot === null || slot === undefined) {
    console.warn("No active site slot selected");
    return;
  }
  const input = document.querySelector(`.site-search[data-slot="${slot}"]`);
  const tile = document.querySelector(`.tile[data-number="${slot + 1}"] iframe`);
  if (!input || !tile) return;

  // CASE 1: selected from sites list
  if (typeof siteOrUrl === "object") {
    input.value = siteOrUrl.name;
    input.dataset.url = siteOrUrl.url;
    tile.src = siteOrUrl.url;
  }
  // CASE 2: manual input
  else {
    let url = siteOrUrl;
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }
    input.value = url;
    input.dataset.url = url;
    tile.src = url;
  }
}

/* ========================= Track which input is active ========================= */
let activeSiteSlot = null;
document.querySelectorAll(".site-plus-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeSiteSlot = parseInt(btn.dataset.slot);
  });
});

/* ========================= Allow manual URL input (important feature) ========================= */
document.querySelectorAll(".site-search").forEach(input => {
  // Track active slot
  input.addEventListener("focus", () => {
    activeSiteSlot = parseInt(input.dataset.slot);
  });
  // Handle manual URL entry
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = input.value.trim();
      const slot = parseInt(input.dataset.slot);
      setSiteToSlot(value, slot);
    }
  });
});

