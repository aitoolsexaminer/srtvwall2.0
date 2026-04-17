const channels = [
/* -------- LEBANESE -------- */
{id: 1, name: "LBCI", group: "lebanese", type: "youtube", channelId: "UCpE6gpKewomi17XDyPfpFjA", logo: "./networkslogos/lebanese/lbci.png" },

{id: 2, name: "MTV", group: "lebanese", type: "hls", src: "https://hms.pfs.gdn/v1/broadcast/mtv/playlist.m3u8", logo: "./networkslogos/lebanese/mtvlebanon.png" },

{id: 3, name: "Al Jadeed", group: "lebanese", type: "youtube", channelId: "UC4JCsTLFcHGk10qpiNMh0Ww", logo: "./networkslogos/lebanese/aljadeed.png" },
//{id: 18, name: "Al Jadeed", group: "lebanese", type: "hls", src: "http://185.9.2.18/chid_391/mono.m3u8", logo: "./networkslogos/lebanese/aljadeed.png" },

{id: 4, name: "OTV", group: "lebanese", type: "blob", src: "blob:https://otv.com.lb/a7bfdad0-890e-4151-8326-d8ee547740a1", logo: "./networkslogos/lebanese/otv.svg" },
//{id: 4, name: "OTV", group: "lebanese", type: "hls", src: "https://otv.hibridcdn.net/otv/tv_abr/playlist.m3u8?=&=&=&=&=698&=731&=&=&=&=2939d66c-aa6f-bb00-8d96-74255c43be39&=idfa", logo: "./networkslogos/lebanese/otv.svg" },
//{id: 4, name: "OTV", group: "lebanese", type: "hls", src: "https://svs.itworkscdn.net/otvlebanonlive/otv.smil/playlist.m3u8", logo: "./networkslogos/lebanese/otv.svg" },

//{id: 5, name: "Tele Liban", group: "lebanese", type: "hls", src: "https://cdn.catiacast.video/abr/ed8f807e2548db4507d2a6f4ba0c4a06/playlist.m3u8", logo: "./networkslogos/lebanese/teleliban.png" },
{id: 5, name: "Tele Liban", group: "lebanese", type: "blob", src: "blob:https://www.teleliban.com.lb/b7329943-1453-4805-84f0-f9cb9226bda5", logo: "./networkslogos/lebanese/teleliban.png" },
//{id: 5, name: "Tele Liban", group: "lebanese", type: "hls", src: "https://list.iptvcat.com/my_list/s/4bed574fb45b16ba26ecd382e570dccf.m3u8", logo: "./networkslogos/lebanese/teleliban.png" },

{id: 6, name: "NBN", group: "lebanese", type: "blob", src: "blob:https://player.livepush.io/774d3a9a-ace0-4f6f-b142-986953295d70", logo: "./networkslogos/lebanese/nbn.png" },
//{id: 6, name: "NBN", group: "lebanese", type: "hls", src: "https://list.iptvcat.com/my_list/s/bdcbdfb825018c3266483f791442398c.m3u8", logo: "./networkslogos/lebanese/nbn.png" },
//{id: 6, name: "NBN", group: "lebanese", type: "hls", src: "https://cloud.odysee.live/content/1d8edd84bd42e695555dbf20d83b45e203ed9ed0/master.m3u8", logo: "./networkslogos/lebanese/nbn.png" },
//{id: 6, name: "NBN", group: "lebanese", type: "hls", src: "http://5.9.119.146:8883/nbn/index.m3u8", logo: "./networkslogos/lebanese/nbn.png" },
//{id: 6, name: "NBN", group: "lebanese", type: "hls", src: "https://dc-global-16scw-livepush.akamaized.net/live/nsmj7FAO4k8CiQu/emLMkjf_fy7-vilU7/index.m3u8", logo: "./networkslogos/lebanese/nbn.png" },

{id: 7, name: "Al Manar", group: "lebanese", type: "hls", src: "https://edge.fastpublish.me/live/index.m3u8", logo: "./networkslogos/lebanese/almanar2.png" },
{id: 8, name: "RED TV", group: "lebanese", type: "hls", src: "https://live.kwikmotion.com/redtvlive/redtv.smil/playlist.m3u8", logo: "./networkslogos/lebanese/redtv.png" },

{id: 9, name: "UNews", group: "lebanese", type: "hls", src: "https://cdn.catiacast.video/abr/9436b5ab3c1171ab04a59af11951292f/playlist.m3u8", logo: "./networkslogos/lebanese/unews.png" },
															 
{id: 10, name: "VDL 24", group: "lebanese", type: "hls", src: "https://svs.itworkscdn.net/vdltvlive/vdltv.smil/playlist.m3u8", logo: "./networkslogos/lebanese/vdl24.png" },


/* -------- ARABIC -------- */

{id: 20, name: "Al Jazeera Arabic", group: "arabic", type: "hls", src: "https://live-hls-apps-aja-fa.getaj.net/AJA/index.m3u8", logo: "./networkslogos/arabic/aljazeera-arabic.svg" },
//{id: 20, name: "Al Jazeera Arabic", group: "arabic", type: "youtube", src: "bNyUyrR0PHo", logo: "./networkslogos/arabic/aljazeera-arabic.svg" },

{id: 21, name: "Al Jazeera Mubasher", group: "arabic", type: "hls", src: "https://live-hls-apps-ajm-fa.getaj.net/AJM/index.m3u8", logo: "./networkslogos/arabic/aljazeera-mubashar.svg" },
//{id: 21, name: "Al Jazeera Mubasher", group: "arabic", type: "youtube", src: "rvJOGTSQNj8", logo: "./networkslogos/arabic/aljazeera-mubashar.svg" },

{id: 22, name: "Al Arabiya", group: "arabic", type: "hls", src: "https://live.alarabiya.net/alarabiapublish/alarabiya.smil/playlist.m3u8", logo: "./networkslogos/arabic/alarabiya.png" },
{id: 23, name: "Al Hadath", group: "arabic", type: "hls", src: "https://live.alarabiya.net/alarabiapublish/alhadath.smil/playlist.m3u8", logo: "./networkslogos/arabic/alhadath.png" },
{id: 24, name: "Sky News Arabia", group: "arabic", type: "hls", src: "https://live-stream.skynewsarabia.com/c-horizontal-channel/horizontal-stream/index.m3u8", logo: "./networkslogos/arabic/skynewsarabia.svg" },
{id: 25, name: "Al Araby TV", group: "arabic", type: "hls", src: "https://live.kwikmotion.com/alaraby1live/alaraby_abr/playlist.m3u8", logo: "./networkslogos/arabic/alaraby.svg" },
{id: 26, name: "Asharq News", group: "arabic", type: "hls", src: "https://live-news.asharq.com/asharq.m3u8", logo: "./networkslogos/arabic/asharqnews.png" },
//{id: 27, name: "France 24 Arabic", group: "arabic", type: "hls", src: "https://live.france24.com/hls/live/2037222/F24_AR_HI_HLS/master_900.m3u8", logo: "./networkslogos/arabic/france24-arabic.svg" },
{id: 28, name: "RT Arabic", group: "arabic", type: "hls", src: "https://rt-arb.rttv.com/dvr/rtarab/playlist.m3u8", logo: "./networkslogos/arabic/trt-arabic.svg" },
{id: 29, name: "TRT Arabic", group: "arabic", type: "hls", src: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8", logo: "./networkslogos/arabic/trt-arabic.svg" }, 

{id: 30, name: "CGTN Arabic", group: "arabic", type: "hls", src: "https://arabic-livews.cgtn.com/hls/LSveq57bErWLinBnxosqjisZ220802LSTefTAS9zc9mpU08y3np9TH220802cd/playlist.m3u8", logo: "./networkslogos/arabic/cgtn-arabic.png" },
//{id: 30, name: "CGTN Arabic", group: "arabic", type: "youtube", src: "UCQmJk0ErE_FiorcLBsDKORA", logo: "./networkslogos/arabic/cgtn-arabic.png" },


//{id: 31, name: "Al Hurra", group: "arabic", type: "youtube", src: "i2n0qKX0v9k" },
{id: 32, name: "Al Mayadeen", group: "arabic", type: "hls", src: "https://mdnlv.cdn.octivid.com/almdn/smil:mpegts.stream.smil/playlist.m3u8", logo: "./networkslogos/arabic/almayadeen.png" },

{id: 33, name: "BBC Arabic", group: "arabic", type: "youtube", channelId: "UCelk6aHijZq-GJBBB9YpReA", logo: "./networkslogos/arabic/bbc-arabic.png" },
//{id: 33, name: "BBC Arabic", group: "arabic", type: "hls", src: "https://ythls.armelin.one/channel/UCelk6aHijZq-GJBBB9YpReA.m3u8", logo: "./networkslogos/arabic/bbc-arabic.png" },
//{id: 33, name: "BBC Arabic", group: "arabic", type: "hls", src: "https://vs-cmaf-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_arabic_tv/pc_hd_abr_v2.mpd", logo: "./networkslogos/arabic/bbc-arabic.png" },

{id:34, name:"DW Arabic", group:"arabic", type:"hls", src:"https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/master.m3u8", logo: "./networkslogos/arabic/dw-arabic.jpeg" },

{id:35, name:"Al Mashhad", group:"arabic", type:"hls", src:"https://fastly.live.brightcove.com/6385343550112/ap-south-1/6313884884001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiaWR2d3RnLmVncmVzcy5qYXYzemwiLCJhY2NvdW50X2lkIjoiNjMxMzg4NDg4NDAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MzEzODg0ODg0MDAxIl0sImp0aSI6IjYzODUzNDM1NTAxMTIifQ.OXCUOblTM-ZkjiyDxPav01or3H6GE5cbGOp1qXlLERk/playlist-hls-dvr.m3u8", logo: "./networkslogos/arabic/almashhad.png" },

{id: 36, name: "Al Alam", group: "arabic", type: "hls", src: "https://live2.alalam.ir/alalam.m3u8", logo: "./networkslogos/araic/alalam.svg" },

{id:37, name:"i24NEWS Arabic", group:"arabic", type:"hls", src:"https://fastly.live.brightcove.com/6386792572112/eu-central-1/5377161796001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiZXJmajYzLmVncmVzcy53YzQ3bTEiLCJhY2NvdW50X2lkIjoiNTM3NzE2MTc5NjAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI1Mzc3MTYxNzk2MDAxIl0sImp0aSI6IjYzODY3OTI1NzIxMTIifQ.vsA8IfCHFqoqo2BHxx4w0PqBgTESPMYgFGL771vzKoA/playlist-hls.m3u8?__nn__=5476555825001&hdnea=st=1774004400~exp=1774008000~acl=/6386792572112/eu-central-1/5377161796001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiZXJmajYzLmVncmVzcy53YzQ3bTEiLCJhY2NvdW50X2lkIjoiNTM3NzE2MTc5NjAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI1Mzc3MTYxNzk2MDAxIl0sImp0aSI6IjYzODY3OTI1NzIxMTIifQ.vsA8IfCHFqoqo2BHxx4w0PqBgTESPMYgFGL771vzKoA/*~hmac=ef2c4d60cce057c68aebb2bf45530629017209282ca4b1b7e49bfc332a0194ec", logo: "./networkslogos/arabic/i24.png" },
//{id:37, name:"i24NEWS Arabic", group:"arabic", type:"blob", src:"blob:https://video.i24news.tv/a846e4e4-bb86-4032-a135-35ae7735eef3", logo: "./networkslogos/arabic/i24.png" },
//{id:37, name:"i24NEWS Arabic", group:"arabic", type:"hls", src:"https://bcovlive-a.akamaihd.net/95116e8d79524d87bf3ac20ba04241e3/eu-central-1/5377161796001/playlist.m3u8", logo: "./networkslogos/arabic/i24.png" },
//{id:37, name:"i24NEWS Arabic", group:"arabic", type:"hls", src:"https://fastly.live.brightcove.com/6386792572112/eu-central-1/5377161796001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiZXJmajYzLmVncmVzcy53YzQ3bTEiLCJhY2NvdW50X2lkIjoiNTM3NzE2MTc5NjAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI1Mzc3MTYxNzk2MDAxIl0sImp0aSI6IjYzODY3OTI1NzIxMTIifQ.vsA8IfCHFqoqo2BHxx4w0PqBgTESPMYgFGL771vzKoA/chunklist__1.m3u8", logo: "./networkslogos/arabic/i24.png" },

{id: 38, name: "CNBC Arabia", group: "arabic", type: "hls", src: "https://cnbc-live.akamaized.net/cnbc/master.m3u8", logo: "./networkslogos/arabic/cnbc-arabic.png" },
//{id: 38, name: "CNBC Arabia", group: "arabic", type: "youtube", channelId: "UCsHdPPJXT-yKVTLGkn3DSvQ", logo: "./networkslogos/arabic/cnbc-arabic.png" },

{id: 39, name: "Al Ghad", group: "arabic", type: "hls", src: "https://eazyvwqssi.erbvr.com/alghadtv/alghadtv.m3u8", logo: "./networkslogos/arabic/alghad.svg" },
//{id: 39, name: "Al Ghad", group: "arabic", type: "youtube", src: "UCH4UNKBHSNwstan99YDoCVg", logo: "./networkslogos/arabic/alghad.svg" },

{id: 40, name: "Shams TV", group: "arabic", type: "hls", src: "https://stream.shams.tv/hls/stream.m3u8", logo: "./networkslogos/arabic/shams.svg" },

{id: 41, name: "Al Jazeera Arabic 2", group: "arabic", type: "hls", src: "https://live-hls-web-aja2-gcp.thehlive.com/AJA2/index.m3u8", logo: "./networkslogos/arabic/aljazeera-arabic2.svg" },

{id: 42, name: "Al Arabiya Programs", group: "arabic", type: "hls", src: "https://live.alarabiya.net/alarabiapublish/aaprograms.smil/playlist.m3u8", logo: "./networkslogos/arabic/alarabiya-programs.png" },

	



	

/* -------- GULF / REGIONAL -------- */
//{id: 90, name: "Al Ekhbariya", group: "gulfarabregion", type: "youtube", src: "UCV01ajGl6nt09h40iDoHDNg", logo: "./networkslogos/regional/saudiekhbariya.png" },
//{id: 91, name: "Dubai TV", group: "gulfarabregion", type: "youtube", src: "@dubaichannel/live" },
//{id: 92, name: "Abu Dhabi TV", group: "gulfarabregion", type: "youtube", src: "@abudhabitv/live" },
//{id: 93, name: "Sharjah TV", group: "gulfarabregion", type: "youtube", src: "9Q9X8yZ0N0k" },
//{id: 94, name: "Kuwait TV", group: "gulfarabregion", type: "youtube", src: "yQYbR6cJ7zE" },
//{id: 95, name: "Qatar TV", group: "gulfarabregion", type: "youtube", src: "c1yYv7bVf3Q" },
//{id: 96, name: "Oman TV", group: "gulfarabregion", type: "youtube", src: "6X3mJ7Q2z0M" },
//{id: 97, name: "Bahrain TV", group: "gulfarabregion", type: "youtube", src: "9M5kC4b6XoE" },
//{id: 98, name: "Al Thania TV", group: "lebanese", type: "youtube", src: "@althaniatv/live" },

/* -------- MENA NATIONAL CHANNELS -------- */
//{id: 297, name: "Al Iraqiya", type: "youtube", src: "@aliraqiyatv/live" },
//{id: 298, name: "Al Sumaria", type: "youtube", src: "@alsumaria/live" },
//{id: 299, name: "Jordan TV", type: "youtube", src: "@jordantv/live" },
//{id: 300, name: "Palestine TV", type: "youtube", src: "@palestinetv/live" },

//{id: 301, name: "Sudan TV", type: "youtube", src: "@sudantv/live" },
//{id: 302, name: "Yemen Today", type: "youtube", src: "@yementoday/live" },

/* -------- KURDISH & REGIONAL -------- */
//{id: 303, name: "Kurdistan 24", type: "youtube", src: "@kurdistan24/live" },
//{id: 304, name: "Rudaw TV", type: "youtube", src: "@rudawtv/live" },


/* -------- INTERNATIONAL NEWS -------- */
{id: 100, name: "France 24 English", group: "intnews", type: "hls", src: "https://live.france24.com/hls/live/2037179/F24_EN_HI_HLS/master_2000.m3u8", logo: "./networkslogos/intnews/france24-english.webp" },
//{id: 100, name: "France 24 English", group: "intnews", type: "youtube", chnnaleId: "UCQfwfsi5VrQ8yKZ-UWmAEFg", logo: "./networkslogos/intnews/france24-english.webp" },

{id: 101, name: "DW English", group: "intnews", type: "hls ", src: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8", logo: "./networkslogos/intnews/dwenglis.jpeg"  },
//{id: 101, name: "DW English", group: "intnews", type: "youtube ", src: "UCknLrEdhRCp1aegoMqRaCZg", logo: "./networkslogos/intnews/dwenglis.jpeg"  },

{id: 103, name: "Sky News", group: "intnews", type: "hls", src: "https://linear901-oo-hls0-prd-gtm.delivery.skycdp.com/17501/sde-fast-skynews/master.m3u8", logo: "./networkslogos/intnews/skynews.png" },
//{id: 103, name: "Sky News", group: "intnews", type: "youtube", src: "UCoMdktPbSTixAyNGwb-UYkQ", logo: "./networkslogos/intnews/skynews.png"  },

{id: 104, name: "ABC News Live", group: "intnews", type: "youtube", src: "UCBi2mrWuNuyYy4gbM6fU18Q", logo: "./networkslogos/intnews/abcnews.png" },
//{id: 104, name: "ABC News Live", group: "intnews", type: "youtube", src: ""UCBi2mrWuNuyYy4gbM6fU18Q", logo: "./networkslogos/intnews/abcnews.png" },

{id: 105, name: "Bloomberg Live", group: "intnews", type: "hls", src: "https://dai.google.com/linear/hls/pa/event/k-VHR5unRdusBDqoXAuB0Q/stream/68d734ab-e5d0-4de2-83b2-4b51fd1d928e:GRQ/master.m3u8", logo: "./networkslogos/intnews/bloomberg.png" },
//{id: 105, name: "Bloomberg Live", group: "intnews", type: "youtube", channelId "UCIALMKvObZNtJ6AmdCLP7Lg", logo: "./networkslogos/intnews/bloomberg.png" },

{id: 106, name: "NBC News Now", group: "intnews", type: "blob", src: "blob:https://www.nbcnews.com/c84f2070-8b14-494c-a570-863c69a2b1d9", logo: "./networkslogos/intnews/nbcbewsnow.png" },
//{id: 106, name: "NBC News Now", group: "intnews", type: "youtube", channelId: "blob:https://www.nbcnews.com/c84f2070-8b14-494c-a570-863c69a2b1d9", logo: "./networkslogos/intnews/nbcbewsnow.png" },

{id: 107, name: "CBS News", group: "intnews", type: "hls", src: "https://news20e7hhcb.airspace-cdn.cbsivideo.com/index.m3u8", logo: "./networkslogos/intnews/cbsnews.png" },
//{id: 107, name: "CBS News", group: "intnews", type: "youtube", channelId: "UC8p1vwvWtl6T73JiExfWs1g", logo: "./networkslogos/intnews/cbsnews.png" },

{id: 108, name: "Euronews", group: "intnews", type: "youtube", channelId: "UCSrZ3UV4jOidv8ppoVuvW9Q", logo: "./networkslogos/intnews/euronews.svg" },

{id: 109, name: "NHK World Japan", group: "intnews", type: "hls", src: "https://www3.nhk.or.jp/nhkworld/common/player/world-player/iframe/player.html?playerId=tTvLive__player&src=https%3A%2F%2Fmasterpl.hls.nhkworld.jp%2Fhls%2Fw%2Flive%2Fmaster.m3u8&analyticsCookie=true&playspeed=1&quality=auto&volume=1", logo: "./networkslogos/intnews/nhkworld.svg" },
//{id: 109, name: "NHK World Japan", group: "intnews", type: "youtube", channelId: "UCSPEjw8F2nQDtmUKPFNF7_A", logo: "./networkslogos/intnews/nhkworld.svg"  },

{id: 110, name: "CNN", group: "intnews", type: "hls", src: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8", logo: "./networkslogos/intnews/cnn.png"  },

{id: 111, name: "CNBC", group: "intnews", type: "hls", src: "https://stream.livenewsplay.com:9443/hls/cnbc/cnbcsd.m3u8", logo: "./networkslogos/intnews/cnbc.png"  },

{id: 112, name: "FOX News", group: "intnews", type: "hls", src: "https://247preview.foxnews.com/hls/live/2020027/fncv3preview/primary.m3u8", logo: "./networkslogos/intnews/foxnews.svg"  },

{id: 113, name: "NEWSMAX2", group: "intnews", type: "hls", src: "https://n2ctsota.akamaized.net/hls/live/2113130/Live_1/index.m3u8", logo: "./networkslogos/intnews/newsmax2.webp"  },
//{id: 113, name: "NEWSMAX2", group: "intnews", type: "youtube", src: "UCx6h-dWzJ5NpAlja1YsApdg", logo: "./networkslogos/intnews/newsmax2.webp"  },

//{id: 114, name: "Arirang TV", group: "intnews", type: "hls", src: "https://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch_livepkgr/master.m3u8" },
//{id: 115, name: "ABC Australia", group: "intnews", type: "hls", src: "https://abc-news-dmd-streams.akamaized.net/out/v1/abcnews.m3u8" },
{id: 116, name: "CGTN News", group: "intnews", type: "hls", src: "https://live.cgtn.com/1000/prog_index.m3u8", logo: "./networkslogos/intnews/cgtn-english.png" },
{id: 117, name: "Press TV", group: "intnews", type: "hls", src: "https://live.presstv.ir/hls/presstv.m3u8", logo: "./networkslogos/intnews/presstv.svg" },

{id: 118, name: "TeleSUR", group: "intnews", type: "hls", src: "https://mblenmain01.telesur.ultrabase.net/mblivev3/480p/playlist.m3u8", logo: "./networkslogos/intnews/telesur.svg"  },
{id: 118, name: "TeleSUR", group: "intnews", type: "youtube", channelId: "UCmuTmpLY35O3csvhyA6vrkg", logo: "./networkslogos/intnews/telesur.svg"  },


//{id: 120, name: "Global News Canada",  group: "intnews", type: "youtube", src: "@globalnews/live" },
//{id: 121, name: "India Today Live",  group: "intnews", type: "youtube", src: "@indiatoday/live" },
//{id: 122, name: "News18 India",  group: "intnews", type: "youtube", src: "@news18/live" },
//{id: 123, name: "Times Now",  group: "intnews", type: "youtube", src: "@timesnow/live" },


{id: 124, name: "WION News",  group: "intnews", type: "hls", src: "https://d7x8z4yuq42qn.cloudfront.net/index_3.m3u8", logo: "./networkslogos/intnews/wionnews.svg" },
//{id: 124, name: "WION News",  group: "intnews", type: "youtube", channelId: "UC_gUM8rL-Lrg6O3adPW9K1g", logo: "./networkslogos/intnews/wionnews.svg"  },

//{id: 125, name: "Bloomberg Quicktake",  group: "intnews", type: "hls", src: "https://bloomberg.com/media-manifest/streams/us.m3u8" },

{id: 126, name: "BFM TV", group: "intnews", type: "hls", src: "https://live-cdn-stream-euw1.bfmtv.bct.nextradiotv.com/master.m3u8", logo: "./networkslogos/intnews/bfmtv.png"},

{id: 127, name: "Al Jazeera English", group: "intnews", type: "hls", src: "https://live‑hls‑apps‑aje‑fa.getaj.net/AJE/index.m3u8", logo: "./networkslogos/intnews/aljazeera-english.png"}, // updated HLS

{id: 128, name: "Al Arabiya English", group: "intnews", type: "hls", src: "https://live.alarabiya.net/alarabiapublish/alarabiya.smil/playlist.m3u8", logo: "./networkslogos/arabic/alarabiya-english.svg" },




/* -------- BUSINESS / FINANCE -------- */
{id: 150, name: "CNBC Arabia", group: "businessfinance", type: "hls", src: "https://cnbc-live.akamaized.net/cnbc/master.m3u8", logo: "./networkslogos/arabic/cnbc-arabic.png" },
//{id: 180, name: "CNBC Arabia", group: "businessfinance", type: "youtube", channelId: "UCsHdPPJXT-yKVTLGkn3DSvQ", logo: "./networkslogos/arabic/cnbc-arabic.png" },

{id: 151, name: "Bloomberg Live", group: "businessfinance", type: "hls", src: "https://dai.google.com/linear/hls/pa/event/k-VHR5unRdusBDqoXAuB0Q/stream/68d734ab-e5d0-4de2-83b2-4b51fd1d928e:GRQ/master.m3u8", logo: "./networkslogos/businessfinance/bloomberg.png" },
//{id: 181, name: "Bloomberg Live", group: "businessfinance", type: "youtube", channelId "UCIALMKvObZNtJ6AmdCLP7Lg", logo: "./networkslogos/businessfinance/bloomberg.png" },

{id: 152, name: "Asharq News", group: "businessfinance", type: "hls", src: "https://live-news.asharq.com/asharq.m3u8", logo: "./networkslogos/arabic/asharqnews.png" },

{id: 153, name: "Al Arabiya Business", group: "businessfinance", type: "hls", src: "https://live.alarabiya.net/alarabiapublish/aswaaq.smil/playlist.m3u8", logo: "./networkslogos/businessfinance/alarabiya-business.jpeg" },
//{id: 182, name: "Al Arabiya Business", group: "businessfinance", type: "youtube", channelID: "UC0mthbFRIm_uYkkzMX09sJw", logo: "./networkslogos/businessfinance/alarabiya-business.jpeg" },




/* -------- DOCUMENTARY & LIFESTYLE -------- */
{id: 180, name: "Asharq Discovery", group: "doclifestyle", type: "hls", src: "https://svs.itworkscdn.net/asharqdiscoverylive/asharqd.smil/playlist_dvr.m3u8", logo: "./networkslogos/documentary/asharqdiscovery.webp" },

{id: 181, name: "Asharq Documentary", group: "doclifestyle", type: "hls", src: "https://svs.itworkscdn.net/asharqdocumentarylive/asharqdocumentary.smil/playlist_dvr.m3u8", logo: "./networkslogos/documentary/asharqdocumentary.webp" },

{id: 182, name: "Al Jazeera Documentary", group: "doclifestyle", type: "hls", src: "https://live-hls-apps-ajd-fa.getaj.net/AJD/index.m3u8", logo: "./networkslogos/documentary/aljazzeradocumentary.webp" },

{id: 183, name: "National Geographic Abu Dhabi", group: "doclifestyle", type: "hls", src: "https://admn-live-cdn-lb.starzplayarabia.com/out/v1/admn_tv_enc/national_geo/national_geo_hls_nd/index.m3u8", logo: "./networkslogos/documentary/natgeoabudhabi.ong" },

{id: 184, name: "DW Documentary",  group: "doclifestyle", type: "youtube", src: "@dwdocumentary/live" },

{id: 185, name: "CGTN Documentary", group: "intnews", type: "hls", src: "https://live.cgtn.com/500d/prog_index.m3u8" },

//{id: 160, name: "WaterBear", group: "doclifestyle", type: "hls", src: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00353-littledotstudios-waterbear-samsunguk/playlist.m3u8" },
//{id: 160, name: "WaterBear Nature", group: "doclifestyle", type: "hls", src: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00353-littledotstudios-waterbear-samsunguk/playlist.m3u8" },

//{id: 161, name: "Real Stories", group: "doclifestyle", type: "hls", src: "https://littledot-realstories-samsung.amagi.tv/playlist.m3u8" },
//{id: 161, name: "Real Stories Docs", group: "doclifestyle", type: "hls", src: "https://littledot-realstories-samsung.amagi.tv/playlist.m3u8" },

//{id: 162, name: "Documentary+", group: "doclifestyle", type: "hls", src: "https://documentaryplus-samsung.amagi.tv/playlist.m3u8" },
//{id: 163, name: "Love Nature", group: "doclifestyle", type: "hls", src: "https://lovenature-samsung.amagi.tv/playlist.m3u8" },

/* -------- SCIENCE & SPACE -------- */
//{id: 41, name: "NASA TV Public", group: "scincespace", type: "hls", src: "https://ntv1.nasa.gov/hls/live/2038346/NTV-Public/master.m3u8" },
//{id: 42, name: "NASA TV Media", group: "scincespace", type: "hls", src: "https://ntv2.nasa.gov/hls/live/2038345/NTV-Media/master.m3u8" },





/* -------- SPORTS / SPECIAL -------- */
//{id: 247, name: "Red Bull TV", group: "sports", type: "hls", src: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8" },
//{id: 248, name: "World Poker Tour", group: "sports", type: "hls", src: "https://worldpokertour-samsung.amagi.tv/playlist.m3u8" },


/* -------- ENTERTAINMENT (PLUTO & OTHERS) -------- */
//{id: 249, name: "Pluto Action", type: "hls", src: "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca672f515a62078d2ec0ad2/master.m3u8" },
//{id: 250, name: "Pluto Comedy", type: "hls", src: "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca671f215a62078d2ec0ac2/master.m3u8" },
//{id: 251, name: "Pluto Movies", type: "hls", src: "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca671c515a62078d2ec0abf/master.m3u8" },
//{id: 267, name: "Pluto Classic TV", type: "hls", src: "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ca6748f515a62078d2ec0b9b/master.m3u8" },

/* -------- EXTRA LIVE & VERTICAL CHANNELS -------- */

//{id: 268, name: "FailArmy", type: "hls", src: "https://jukinmedia-failarmy-2-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 269, name: "People Are Awesome", type: "hls", src: "https://jukinmedia-peopleareawesome-1-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 270, name: "Insight TV", type: "hls", src: "https://insighttv-samsunguk.amagi.tv/playlist.m3u8" },
//{id: 271, name: "Motorvision TV", type: "hls", src: "https://stream.motorvision.tv/hls/live.m3u8" },
//{id: 272, name: "Tastemade", type: "hls", src: "https://tastemade-samsung.amagi.tv/playlist.m3u8" },

/* -------- NEWS & WEATHER HLS ---- */
//{id: 279, name: "WeatherNation", type: "hls", src: "https://weathernationtv-samsung.amagi.tv/playlist.m3u8" },
//{id: 280, name: "USA Today News", type: "hls", src: "https://usatoday-samsung.amagi.tv/playlist.m3u8" },
//{id: 281, name: "Cheddar News", type: "hls", src: "https://cheddar-samsung.amagi.tv/playlist.m3u8" },
//{id: 282, name: "Local Now", type: "hls", src: "https://localnow-samsung.amagi.tv/playlist.m3u8" },

/* -------- SPECIALTY CHANNELS -------- */
//{id: 283, name: "TED Live", type: "hls", src: "https://ted-samsung.amagi.tv/playlist.m3u8" },
//{id: 284, name: "Law & Crime", type: "hls", src: "https://lawandcrime-samsung.amagi.tv/playlist.m3u8" },

/* -------- LIFESTYLE & SPECIAL INTEREST -------- */
//{id: 285, name: "Travel XP", type: "hls", src: "https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 286, name: "Fashion TV Europe", type: "hls", src: "https://fashiontv-fashiontv-1-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 287, name: "Bon Appetit", type: "hls", src: "https://bonappetit-samsung.amagi.tv/playlist.m3u8" },
//{id: 288, name: "Revry Pride", type: "hls", src: "https://revry-rakuten.amagi.tv/playlist.m3u8" },

/* -------- CLASSIC & CULTURAL -------- */
//{id: 289, name: "Comedy Dynamics", type: "hls", src: "https://comedydynamics-samsung.amagi.tv/playlist.m3u8" },
//{id: 290, name: "Mystery Science Theater", type: "hls", src: "https://mst3k-samsung.amagi.tv/playlist.m3u8" },
//{id: 291, name: "Shout Factory TV", type: "hls", src: "https://shoutfactory-samsung.amagi.tv/playlist.m3u8" },

/* -------- SPECIALTY INTEREST -------- */
//{id: 292, name: "Outdoor America", type: "hls", src: "https://outside-samsung.amagi.tv/playlist.m3u8" },
//{id: 293, name: "Cars TV", type: "hls", src: "https://carstv-samsung.amagi.tv/playlist.m3u8" },

/* -------- ARABIC & MENA MUSIC -------- */
//{id: 294, name: "Rotana Music", type: "youtube", src: "@rotanamusic/live" },
//{id: 295, name: "Rotana Khalijia", type: "youtube", src: "@rotanakhalijia/live" },
//{id: 296, name: "MBC Variety", type: "youtube", src: "@mbcvariety/live" },

/* -------- REPEAT / DUPLICATE STREAMS WITH DISTINCT FEEDS -------- */
//{id: 305, name: "Tastemade Travel", type: "hls", src: "https://tastemade-samsung.amagi.tv/playlist.m3u8" }, // duplicate of id:72 region variant
//{id: 306, name: "Insight Sports", type: "hls", src: "https://insighttv-samsunguk.amagi.tv/playlist.m3u8" }, // duplicate of id:70

//{id: 307, name: "Red Bull Adventure", type: "hls", src: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8" },

//{id: 308, name: "FailArmy Live", type: "hls", src: "https://jukinmedia-failarmy-2-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 309, name: "People Are Awesome Live", type: "hls", src: "https://jukinmedia-peopleareawesome-1-eu.rakuten.wurl.tv/playlist.m3u8" },

//{id: 310, name: "NatureVision TV", type: "hls", src: "https://lovenature-samsung.amagi.tv/playlist.m3u8" },

/* -------- DUPLICATE / ALTERNATE HLS -------- */
//{id: 422, name: "Motorvision TV", type: "hls", src: "https://stream.motorvision.tv/hls/live.m3u8" },
//{id: 423, name: "Stadium Sports", type: "hls", src: "https://stadium-samsung.amagi.tv/playlist.m3u8" },
//{id: 424, name: "World Poker Tour", type: "hls", src: "https://worldpokertour-samsung.amagi.tv/playlist.m3u8" },
//{id: 425, name: "Tastemade Food", type: "hls", src: "https://tastemade-samsung.amagi.tv/playlist.m3u8" },
//{id: 426, name: "Outdoor Channel", type: "hls", src: "https://outside-samsung.amagi.tv/playlist.m3u8" },
//{id: 427, name: "Travel Channel Live", type: "hls", src: "https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 428, name: "Fashion TV Europe", type: "hls", src: "https://fashiontv-fashiontv-1-eu.rakuten.wurl.tv/playlist.m3u8" },
//{id: 429, name: "Revry Pride", type: "hls", src: "https://revry-rakuten.amagi.tv/playlist.m3u8" },
//{id: 430, name: "Comedy Channel Live", type: "hls", src: "https://comedydynamics-samsung.amagi.tv/playlist.m3u8" },
//{id: 431, name: "Classic TV Network", type: "hls", src: "https://shoutfactory-samsung.amagi.tv/playlist.m3u8" },
];
