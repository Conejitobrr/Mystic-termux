import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*γπ π·πΎπ»π° β¨${taguser}β¨, π°πππΈ π΄πππ° π΄π» πΌπ΄π½π π²πΎπΌπΏπ»π΄ππΎ π³π΄ ππ·π΄ πΌππππΈπ² - π±πΎπ πε½‘*

*π π΅π΄π²π·π°: ${week}, ${date}*
*π ππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}*
*π ππππ°ππΈπΎπ: ${rtotalreg}*
${readMore}
*<πβπ½πβππΈβππβ π»πΌπ πΉππ/>*

Β° ΰΆ¬ β π _${usedPrefix}grupos_
Β° ΰΆ¬ β π _${usedPrefix}estado_
Β° ΰΆ¬ β π _${usedPrefix}infobot_
Β° ΰΆ¬ β π _${usedPrefix}donar_
Β° ΰΆ¬ β π _${usedPrefix}grouplist_
Β° ΰΆ¬ β π _${usedPrefix}owner_
Β° ΰΆ¬ β π _${usedPrefix}script_
Β° ΰΆ¬ β π _Bot_ (π’π π π ππ πππππππ)

*<πβπΌ πβ πΉππ πΈ ππ πΎβπβπ/>*

Β° ΰΆ¬βπ½ _${usedPrefix}join *<enlace / link / url>*_

*<πππΌπΎππ/>*

Β° ΰΆ¬βποΈ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ppt *<papel / tijera /piedra>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}gay2 *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lesbiana *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajero *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajera *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manco *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manca *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}rata *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}love *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}doxear *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pregunta *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}suitpvp *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}slot *<apuesta>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ttt *<nombre sala>*_
Β° ΰΆ¬βποΈ _${usedPrefix}delttt_
Β° ΰΆ¬βποΈ _${usedPrefix}simi *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}top *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}topgays_
Β° ΰΆ¬βποΈ _${usedPrefix}topotakus_
Β° ΰΆ¬βποΈ _${usedPrefix}formarpareja_
Β° ΰΆ¬βποΈ _${usedPrefix}verdad_
Β° ΰΆ¬βποΈ _${usedPrefix}reto_
Β° ΰΆ¬βποΈ _${usedPrefix}cancion_
Β° ΰΆ¬βποΈ _${usedPrefix}pista_

*<πΈβππππΈβ π π»πΌππΈβππππΈβ/>*

Β° ΰΆ¬ββοΈ _${usedPrefix}enable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antiviewonce*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antiviewonce*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antitoxic*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antitoxic*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antitraba*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antitraba*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antiarabes*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antiarabes*_

*<βπΌβπβππΌπ π»πΌ π½πΈππππ/>*

Β° ΰΆ¬βπ° _${usedPrefix}reporte *<texto>*_

*<π»πΌπβπΈβπΎπΈπ/>*

Β° ΰΆ¬βπ₯ _${usedPrefix}facebook *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}mediafire *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}gitclone *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}stickerpack *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}gdrive *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktok *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}xnxxdl *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}xvideosdl *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp3 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp4 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playdoc *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playlist *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playlist2 *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}spotify *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ringtone *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}soundcloud *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}imagen *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pinteret *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper2 *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pptiktok *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}igstalk *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}igstory *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<πΎβπβππ/>* 

Β° ΰΆ¬βπ _${usedPrefix}add *<numero>*_
Β° ΰΆ¬βπ _${usedPrefix}kick *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}grupo *<abrir / cerrar>*_
Β° ΰΆ¬βπ _${usedPrefix}promote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _admins *<texto>*_ (π’π π π ππ πππππππ)
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}infogroup_
Β° ΰΆ¬βπ _${usedPrefix}link_
Β° ΰΆ¬βπ _${usedPrefix}setname *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setdesc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}invocar *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setwelcome *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setbye *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hidetag *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}fantasmas_
Β° ΰΆ¬βπ _${usedPrefix}destraba_

*<βπβππΌβπππ»πβπΌπ/>*

Β° ΰΆ¬βπ§§ _${usedPrefix}togifaud *<responde a un video>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}toimg *<responde a un sticker>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}toptt *<responde a un video / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tovideo *<responde a un sticker>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tts es *<texto>*_

*<πΌπ½πΌβπππ π πππΎππ/>*

Β° ΰΆ¬βποΈ _${usedPrefix}logos *<efecto> <texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}logocorazon *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}logochristmas *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}simpcard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}hornycard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lolice *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ytcomment *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
Β° ΰΆ¬βποΈ _${usedPrefix}itssostupid_
Β° ΰΆ¬βποΈ _${usedPrefix}pixelar_
Β° ΰΆ¬βποΈ _${usedPrefix}blur_

*<π½βπΈππΌπ π ππΌππππ/>*

Β° ΰΆ¬βπ₯ _${usedPrefix}consejo_
Β° ΰΆ¬βπ₯ _${usedPrefix}fraseromantica_
Β° ΰΆ¬βπ₯ _${usedPrefix}historiaromantica_

*<βπΈβπ»ππ/>*

Β° ΰΆ¬βπΎ _${usedPrefix}cristianoronaldo_
Β° ΰΆ¬βπΎ _${usedPrefix}messi_
Β° ΰΆ¬βπΎ _${usedPrefix}meme_
Β° ΰΆ¬βπΎ _${usedPrefix}itzy_
Β° ΰΆ¬βπΎ _${usedPrefix}blackpink_
Β° ΰΆ¬βπΎ _${usedPrefix}kpop *<blackpink / exo / bts>*_
Β° ΰΆ¬βπΎ _${usedPrefix}lolivid_
Β° ΰΆ¬βπΎ _${usedPrefix}loli_
Β° ΰΆ¬βπΎ _${usedPrefix}navidad_
Β° ΰΆ¬βπΎ _${usedPrefix}ppcouple_
Β° ΰΆ¬βπΎ _${usedPrefix}wpmontaΓ±a_
Β° ΰΆ¬βπΎ _${usedPrefix}pubg_
Β° ΰΆ¬βπΎ _${usedPrefix}wpgaming_
Β° ΰΆ¬βπΎ _${usedPrefix}wpaesthetic_
Β° ΰΆ¬βπΎ _${usedPrefix}wpaesthetic2_
Β° ΰΆ¬βπΎ _${usedPrefix}wprandom_
Β° ΰΆ¬βπΎ _${usedPrefix}wallhp_
Β° ΰΆ¬βπΎ _${usedPrefix}wpvehiculo_
Β° ΰΆ¬βπΎ _${usedPrefix}wpmoto_
Β° ΰΆ¬βπΎ _${usedPrefix}coffee_
Β° ΰΆ¬βπΎ _${usedPrefix}pentol_
Β° ΰΆ¬βπΎ _${usedPrefix}caricatura_
Β° ΰΆ¬βπΎ _${usedPrefix}ciberespacio_
Β° ΰΆ¬βπΎ _${usedPrefix}technology_
Β° ΰΆ¬βπΎ _${usedPrefix}doraemon_
Β° ΰΆ¬βπΎ _${usedPrefix}hacker_
Β° ΰΆ¬βπΎ _${usedPrefix}planeta_
Β° ΰΆ¬βπΎ _${usedPrefix}randomprofile_
Β° ΰΆ¬βπΎ _${usedPrefix}neko_
Β° ΰΆ¬βπΎ _${usedPrefix}waifu_
Β° ΰΆ¬βπΎ _${usedPrefix}akira_
Β° ΰΆ¬βπΎ _${usedPrefix}akiyama_
Β° ΰΆ¬βπΎ _${usedPrefix}anna_
Β° ΰΆ¬βπΎ _${usedPrefix}asuna_
Β° ΰΆ¬βπΎ _${usedPrefix}ayuzawa_
Β° ΰΆ¬βπΎ _${usedPrefix}boruto_
Β° ΰΆ¬βπΎ _${usedPrefix}chiho_
Β° ΰΆ¬βπΎ _${usedPrefix}chitoge_
Β° ΰΆ¬βπΎ _${usedPrefix}deidara_
Β° ΰΆ¬βπΎ _${usedPrefix}erza_
Β° ΰΆ¬βπΎ _${usedPrefix}elaina_
Β° ΰΆ¬βπΎ _${usedPrefix}eba_
Β° ΰΆ¬βπΎ _${usedPrefix}emilia_
Β° ΰΆ¬βπΎ _${usedPrefix}hestia_
Β° ΰΆ¬βπΎ _${usedPrefix}hinata_
Β° ΰΆ¬βπΎ _${usedPrefix}inori_
Β° ΰΆ¬βπΎ _${usedPrefix}isuzu_
Β° ΰΆ¬βπΎ _${usedPrefix}itachi_
Β° ΰΆ¬βπΎ _${usedPrefix}itori_
Β° ΰΆ¬βπΎ _${usedPrefix}kaga_
Β° ΰΆ¬βπΎ _${usedPrefix}kagura_
Β° ΰΆ¬βπΎ _${usedPrefix}kaori_
Β° ΰΆ¬βπΎ _${usedPrefix}keneki_
Β° ΰΆ¬βπΎ _${usedPrefix}kotori_
Β° ΰΆ¬βπΎ _${usedPrefix}kurumi_
Β° ΰΆ¬βπΎ _${usedPrefix}madara_
Β° ΰΆ¬βπΎ _${usedPrefix}mikasa_
Β° ΰΆ¬βπΎ _${usedPrefix}miku_
Β° ΰΆ¬βπΎ _${usedPrefix}minato_
Β° ΰΆ¬βπΎ _${usedPrefix}naruto_
Β° ΰΆ¬βπΎ _${usedPrefix}nezuko_
Β° ΰΆ¬βπΎ _${usedPrefix}sagiri_
Β° ΰΆ¬βπΎ _${usedPrefix}sasuke_
Β° ΰΆ¬βπΎ _${usedPrefix}sakura_
Β° ΰΆ¬βπΎ _${usedPrefix}cosplay_

*<βπππΈβπ»ππ +ππ />*

Β° ΰΆ¬βπ _${usedPrefix}pack_
Β° ΰΆ¬βπ _${usedPrefix}pack2_
Β° ΰΆ¬βπ _${usedPrefix}pack3_
Β° ΰΆ¬βπ _${usedPrefix}videoxxx_
Β° ΰΆ¬βπ _${usedPrefix}tiktokxxx_
Β° ΰΆ¬βπ _${usedPrefix}tetas_
Β° ΰΆ¬βπ _${usedPrefix}booty_
Β° ΰΆ¬βπ _${usedPrefix}ecchi_
Β° ΰΆ¬βπ _${usedPrefix}furro_
Β° ΰΆ¬βπ _${usedPrefix}imagenlesbians_
Β° ΰΆ¬βπ _${usedPrefix}panties_
Β° ΰΆ¬βπ _${usedPrefix}pene_
Β° ΰΆ¬βπ _${usedPrefix}porno_
Β° ΰΆ¬βπ _${usedPrefix}porno2_
Β° ΰΆ¬βπ _${usedPrefix}randomxxx_
Β° ΰΆ¬βπ _${usedPrefix}pechos_
Β° ΰΆ¬βπ _${usedPrefix}yaoi_
Β° ΰΆ¬βπ _${usedPrefix}yaoi2_
Β° ΰΆ¬βπ _${usedPrefix}yuri_
Β° ΰΆ¬βπ _${usedPrefix}yuri2_
Β° ΰΆ¬βπ _${usedPrefix}trapito_
Β° ΰΆ¬βπ _${usedPrefix}hentai_
Β° ΰΆ¬βπ _${usedPrefix}nsfwloli_
Β° ΰΆ¬βπ _${usedPrefix}nsfworgy_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfoot_
Β° ΰΆ¬βπ _${usedPrefix}nsfwass_
Β° ΰΆ¬βπ _${usedPrefix}nsfwbdsm_
Β° ΰΆ¬βπ _${usedPrefix}nsfwcum_
Β° ΰΆ¬βπ _${usedPrefix}nsfwero_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfemdom_
Β° ΰΆ¬βπ _${usedPrefix}nsfwglass_

*<πΌπ½πΌβπππ π»πΌ πΈππ»πππ/>*
*- ππ΄ππΏπΎπ½π³π΄ π° ππ½ π°ππ³πΈπΎ πΎ π½πΎππ° π³π΄ ππΎπ*

Β° ΰΆ¬βπ€ _${usedPrefix}bass_
Β° ΰΆ¬βπ€ _${usedPrefix}blown_
Β° ΰΆ¬βπ€ _${usedPrefix}deep_
Β° ΰΆ¬βπ€ _${usedPrefix}earrape_
Β° ΰΆ¬βπ€ _${usedPrefix}fast_
Β° ΰΆ¬βπ€ _${usedPrefix}fat_
Β° ΰΆ¬βπ€ _${usedPrefix}nightcore_
Β° ΰΆ¬βπ€ _${usedPrefix}reverse_
Β° ΰΆ¬βπ€ _${usedPrefix}robot_
Β° ΰΆ¬βπ€ _${usedPrefix}slow_
Β° ΰΆ¬βπ€ _${usedPrefix}smooth_
Β° ΰΆ¬βπ€ _${usedPrefix}tupai_

*<ββπΈπ πΈβπβπππ/>*

Β° ΰΆ¬βπ³ _${usedPrefix}start_
Β° ΰΆ¬βπ³ _${usedPrefix}next_
Β° ΰΆ¬βπ³ _${usedPrefix}leave_

*<πΉππβπΈπ»πβπΌπ/>*

Β° ΰΆ¬βπ _${usedPrefix}stickersearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}xnxxsearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}animeinfo *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}google *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}letra *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}wikipedia *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}ytsearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkdone *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkgoogle *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkmody *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkshub *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}happymod *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hostapk *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}revdl *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}toraccino *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}uapkpro *<texto>*_

*<πΈππ»πππ/>* 
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)* 
_(π’π π π ππ πππππππ)_

Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _Te diagnostico con gay_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Fiesta del admin_
Β° ΰΆ¬βπ _Fiesta del administrador_ 
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Noche de paz_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _Buenos tardes_
Β° ΰΆ¬βπ _Buenos noches_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Chica lgante_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Atencion grupo_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _tio que rico_
Β° ΰΆ¬βπ _Viernes_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Un pato_
Β° ΰΆ¬βπ _Nyanpasu_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _Yamete_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _Es puto_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Mierda de Bot_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Epico_
Β° ΰΆ¬βπ _Shitpost_
Β° ΰΆ¬βπ _Rawr_
Β° ΰΆ¬βπ _UwU_
Β° ΰΆ¬βπ _:c_
Β° ΰΆ¬βπ _a_

*<βπΌββπΈπππΌβππΈπ/>*

Β° ΰΆ¬βπ οΈ _${usedPrefix}afk *<motivo>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}ocr *<responde a imagen>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}acortar *<enlace / link / url>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}calc *<operacion math>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}del *<respondre a mensaje del Bot>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}whatmusic *<responde a un audio>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}qrcode *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}readmore *<texto1| texto2>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}styletext *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}traducir *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}nowa *<numero>*_

*<ββπΎ - ππππππΌπ - πΌβπβππππΈ/>*

Β° ΰΆ¬βπ΅ _${usedPrefix}balance_
Β° ΰΆ¬βπ΅ _${usedPrefix}claim_
Β° ΰΆ¬βπ΅ _${usedPrefix}lb_
Β° ΰΆ¬βπ΅ _${usedPrefix}levelup_
Β° ΰΆ¬βπ΅ _${usedPrefix}myns_
Β° ΰΆ¬βπ΅ _${usedPrefix}perfil_
Β° ΰΆ¬βπ΅ _${usedPrefix}work_
Β° ΰΆ¬βπ΅ _${usedPrefix}minar_
Β° ΰΆ¬βπ΅ _${usedPrefix}buy_
Β° ΰΆ¬βπ΅ _${usedPrefix}buyall_
Β° ΰΆ¬βπ΅ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
Β° ΰΆ¬βπ΅ _${usedPrefix}verificar_
Β° ΰΆ¬βπ΅ _${usedPrefix}unreg *<numero de serie>*_

*<πππβππΌβπ/>*

Β° ΰΆ¬βπ½ _${usedPrefix}sticker *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sticker *<enlace / link / url>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<enlace / link / url>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sfull *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
Β° ΰΆ¬βπ½ _${usedPrefix}scircle *<responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sremovebg *<responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}semoji *<tipo> <emoji>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp2 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp3 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp2 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp3 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp4 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp5 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}pat *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}slap *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}kiss *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}dado_
Β° ΰΆ¬βπ½ _${usedPrefix}wm *<packname> <author>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<ππβπΌβ π πππ»πΌβπΈπ»πβπΌπ/>*

Β° ΰΆ¬βπ > *<funcion>*
Β° ΰΆ¬βπ => *<funcion>*
Β° ΰΆ¬βπ $ *<funcion>*
Β° ΰΆ¬βπ _${usedPrefix}cajafuerte_
Β° ΰΆ¬βπ _${usedPrefix}blocklist_
Β° ΰΆ¬βπ _${usedPrefix}enable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}disable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}enable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}disable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}enable *public*_
Β° ΰΆ¬βπ _${usedPrefix}disable *public*_
Β° ΰΆ¬βπ _${usedPrefix}enable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *anticall*_
Β° ΰΆ¬βπ _${usedPrefix}disable *anticall*_
Β° ΰΆ¬βπ _${usedPrefix}enable *antiprivado*_
Β° ΰΆ¬βπ _${usedPrefix}disable *antiprivado*_
Β° ΰΆ¬βπ _${usedPrefix}msg *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}banchat_
Β° ΰΆ¬βπ _${usedPrefix}unbanchat_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}unbanuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}bc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcchats *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcgc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}cleartpm_
Β° ΰΆ¬βπ _${usedPrefix}restart_
Β° ΰΆ¬βπ _${usedPrefix}update_
Β° ΰΆ¬βπ _${usedPrefix}traba1_ 
Β° ΰΆ¬βπ _${usedPrefix}addprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}delprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}listprem_
Β° ΰΆ¬βπ _${usedPrefix}listcmd_
Β° ΰΆ¬βπ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
Β° ΰΆ¬βπ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: 'π? π³πΎπ½π°π π?' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: 'πΉ πΎππ½π΄π πΉ' }, type: 1 },
{ buttonId: '#infobot', buttonText: { displayText: 'πΎ πΈπ½π΅πΎπ±πΎπ πΎ' }, type: 1 }]
let buttonMessage = {
image: imagen1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'π πππ ππππππ - πππ π',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let more = String.fromCharCode(8206)
let masss = more.repeat(850)     

let str = `
*γπ π·πΎπ»π° β¨${name}β¨, π°πππΈ π΄πππ° π΄π» πΌπ΄π½π π²πΎπΌπΏπ»π΄ππΎ π³π΄ ππ·π΄ πΌππππΈπ² - π±πΎπ πε½‘*

*π π΅π΄π²π·π°: ${week}, ${date}*
*π ππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}*
*π ππππ°ππΈπΎπ: ${rtotalreg}*

${masss}
*<πβπ½πβππΈβππβ π»πΌπ πΉππ/>*

Β° ΰΆ¬ β π _${usedPrefix}grupos_
Β° ΰΆ¬ β π _${usedPrefix}estado_
Β° ΰΆ¬ β π _${usedPrefix}infobot_
Β° ΰΆ¬ β π _${usedPrefix}donar_
Β° ΰΆ¬ β π _${usedPrefix}grouplist_
Β° ΰΆ¬ β π _${usedPrefix}owner_
Β° ΰΆ¬ β π _${usedPrefix}script_
Β° ΰΆ¬ β π _Bot_ (π’π π π ππ πππππππ)

*<πβπΌ πβ πΉππ πΈ ππ πΎβπβπ/>*

Β° ΰΆ¬βπ½ _${usedPrefix}join *<enlace / link / url>*_

*<πππΌπΎππ/>*

Β° ΰΆ¬βποΈ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ppt *<papel / tijera /piedra>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}gay2 *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lesbiana *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajero *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajera *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manco *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manca *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}rata *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}love *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}doxear *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pregunta *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}suitpvp *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}slot *<apuesta>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ttt *<nombre sala>*_
Β° ΰΆ¬βποΈ _${usedPrefix}delttt_
Β° ΰΆ¬βποΈ _${usedPrefix}simi *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}top *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}topgays_
Β° ΰΆ¬βποΈ _${usedPrefix}topotakus_
Β° ΰΆ¬βποΈ _${usedPrefix}formarpareja_
Β° ΰΆ¬βποΈ _${usedPrefix}verdad_
Β° ΰΆ¬βποΈ _${usedPrefix}reto_
Β° ΰΆ¬βποΈ _${usedPrefix}cancion_
Β° ΰΆ¬βποΈ _${usedPrefix}pista_

*<πΈβππππΈβ π π»πΌππΈβππππΈβ/>*

Β° ΰΆ¬ββοΈ _${usedPrefix}enable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antiviewonce*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antiviewonce*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antitoxic*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antitoxic*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antitraba*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antitraba*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antiarabes*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antiarabes*_

*<βπΌβπβππΌπ π»πΌ π½πΈππππ/>*

Β° ΰΆ¬βπ° _${usedPrefix}reporte *<texto>*_

*<π»πΌπβπΈβπΎπΈπ/>*

Β° ΰΆ¬βπ₯ _${usedPrefix}facebook *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}mediafire *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}instagram *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}gitclone *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}stickerpack *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}gdrive *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktok *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}xnxxdl *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}xvideosdl *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp3 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp4 *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}play *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playdoc *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playlist *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}playlist2 *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}spotify *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}ringtone *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}soundcloud *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}imagen *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pinteret *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper2 *<texto>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pptiktok *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}igstalk *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}igstory *<nombre de usuario>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<πΎβπβππ/>* 

Β° ΰΆ¬βπ _${usedPrefix}add *<numero>*_
Β° ΰΆ¬βπ _${usedPrefix}kick *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}grupo *<abrir / cerrar>*_
Β° ΰΆ¬βπ _${usedPrefix}promote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _admins *<texto>*_ (π’π π π ππ πππππππ)
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}infogroup_
Β° ΰΆ¬βπ _${usedPrefix}link_
Β° ΰΆ¬βπ _${usedPrefix}setname *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setdesc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}invocar *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setwelcome *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setbye *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hidetag *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}fantasmas_
Β° ΰΆ¬βπ _${usedPrefix}destraba_

*<βπβππΌβπππ»πβπΌπ/>*

Β° ΰΆ¬βπ§§ _${usedPrefix}togifaud *<responde a un video>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}toimg *<responde a un sticker>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}toptt *<responde a un video / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tovideo *<responde a un sticker>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
Β° ΰΆ¬βπ§§ _${usedPrefix}tts es *<texto>*_

*<πΌπ½πΌβπππ π πππΎππ/>*

Β° ΰΆ¬βποΈ _${usedPrefix}logos *<efecto> <texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}logocorazon *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}logochristmas *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}simpcard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}hornycard *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lolice *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ytcomment *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
Β° ΰΆ¬βποΈ _${usedPrefix}itssostupid_
Β° ΰΆ¬βποΈ _${usedPrefix}pixelar_
Β° ΰΆ¬βποΈ _${usedPrefix}blur_

*<π½βπΈππΌπ π ππΌππππ/>*

Β° ΰΆ¬βπ₯ _${usedPrefix}consejo_
Β° ΰΆ¬βπ₯ _${usedPrefix}fraseromantica_
Β° ΰΆ¬βπ₯ _${usedPrefix}historiaromantica_

*<βπΈβπ»ππ/>*

Β° ΰΆ¬βπΎ _${usedPrefix}cristianoronaldo_
Β° ΰΆ¬βπΎ _${usedPrefix}messi_
Β° ΰΆ¬βπΎ _${usedPrefix}meme_
Β° ΰΆ¬βπΎ _${usedPrefix}itzy_
Β° ΰΆ¬βπΎ _${usedPrefix}blackpink_
Β° ΰΆ¬βπΎ _${usedPrefix}kpop *<blackpink / exo / bts>*_
Β° ΰΆ¬βπΎ _${usedPrefix}lolivid_
Β° ΰΆ¬βπΎ _${usedPrefix}loli_
Β° ΰΆ¬βπΎ _${usedPrefix}navidad_
Β° ΰΆ¬βπΎ _${usedPrefix}ppcouple_
Β° ΰΆ¬βπΎ _${usedPrefix}wpmontaΓ±a_
Β° ΰΆ¬βπΎ _${usedPrefix}pubg_
Β° ΰΆ¬βπΎ _${usedPrefix}wpgaming_
Β° ΰΆ¬βπΎ _${usedPrefix}wpaesthetic_
Β° ΰΆ¬βπΎ _${usedPrefix}wpaesthetic2_
Β° ΰΆ¬βπΎ _${usedPrefix}wprandom_
Β° ΰΆ¬βπΎ _${usedPrefix}wallhp_
Β° ΰΆ¬βπΎ _${usedPrefix}wpvehiculo_
Β° ΰΆ¬βπΎ _${usedPrefix}wpmoto_
Β° ΰΆ¬βπΎ _${usedPrefix}coffee_
Β° ΰΆ¬βπΎ _${usedPrefix}pentol_
Β° ΰΆ¬βπΎ _${usedPrefix}caricatura_
Β° ΰΆ¬βπΎ _${usedPrefix}ciberespacio_
Β° ΰΆ¬βπΎ _${usedPrefix}technology_
Β° ΰΆ¬βπΎ _${usedPrefix}doraemon_
Β° ΰΆ¬βπΎ _${usedPrefix}hacker_
Β° ΰΆ¬βπΎ _${usedPrefix}planeta_
Β° ΰΆ¬βπΎ _${usedPrefix}randomprofile_
Β° ΰΆ¬βπΎ _${usedPrefix}neko_
Β° ΰΆ¬βπΎ _${usedPrefix}waifu_
Β° ΰΆ¬βπΎ _${usedPrefix}akira_
Β° ΰΆ¬βπΎ _${usedPrefix}akiyama_
Β° ΰΆ¬βπΎ _${usedPrefix}anna_
Β° ΰΆ¬βπΎ _${usedPrefix}asuna_
Β° ΰΆ¬βπΎ _${usedPrefix}ayuzawa_
Β° ΰΆ¬βπΎ _${usedPrefix}boruto_
Β° ΰΆ¬βπΎ _${usedPrefix}chiho_
Β° ΰΆ¬βπΎ _${usedPrefix}chitoge_
Β° ΰΆ¬βπΎ _${usedPrefix}deidara_
Β° ΰΆ¬βπΎ _${usedPrefix}erza_
Β° ΰΆ¬βπΎ _${usedPrefix}elaina_
Β° ΰΆ¬βπΎ _${usedPrefix}eba_
Β° ΰΆ¬βπΎ _${usedPrefix}emilia_
Β° ΰΆ¬βπΎ _${usedPrefix}hestia_
Β° ΰΆ¬βπΎ _${usedPrefix}hinata_
Β° ΰΆ¬βπΎ _${usedPrefix}inori_
Β° ΰΆ¬βπΎ _${usedPrefix}isuzu_
Β° ΰΆ¬βπΎ _${usedPrefix}itachi_
Β° ΰΆ¬βπΎ _${usedPrefix}itori_
Β° ΰΆ¬βπΎ _${usedPrefix}kaga_
Β° ΰΆ¬βπΎ _${usedPrefix}kagura_
Β° ΰΆ¬βπΎ _${usedPrefix}kaori_
Β° ΰΆ¬βπΎ _${usedPrefix}keneki_
Β° ΰΆ¬βπΎ _${usedPrefix}kotori_
Β° ΰΆ¬βπΎ _${usedPrefix}kurumi_
Β° ΰΆ¬βπΎ _${usedPrefix}madara_
Β° ΰΆ¬βπΎ _${usedPrefix}mikasa_
Β° ΰΆ¬βπΎ _${usedPrefix}miku_
Β° ΰΆ¬βπΎ _${usedPrefix}minato_
Β° ΰΆ¬βπΎ _${usedPrefix}naruto_
Β° ΰΆ¬βπΎ _${usedPrefix}nezuko_
Β° ΰΆ¬βπΎ _${usedPrefix}sagiri_
Β° ΰΆ¬βπΎ _${usedPrefix}sasuke_
Β° ΰΆ¬βπΎ _${usedPrefix}sakura_
Β° ΰΆ¬βπΎ _${usedPrefix}cosplay_

*<βπππΈβπ»ππ +ππ />*

Β° ΰΆ¬βπ _${usedPrefix}pack_
Β° ΰΆ¬βπ _${usedPrefix}pack2_
Β° ΰΆ¬βπ _${usedPrefix}pack3_
Β° ΰΆ¬βπ _${usedPrefix}videoxxx_
Β° ΰΆ¬βπ _${usedPrefix}tiktokxxx_
Β° ΰΆ¬βπ _${usedPrefix}tetas_
Β° ΰΆ¬βπ _${usedPrefix}booty_
Β° ΰΆ¬βπ _${usedPrefix}ecchi_
Β° ΰΆ¬βπ _${usedPrefix}furro_
Β° ΰΆ¬βπ _${usedPrefix}imagenlesbians_
Β° ΰΆ¬βπ _${usedPrefix}panties_
Β° ΰΆ¬βπ _${usedPrefix}pene_
Β° ΰΆ¬βπ _${usedPrefix}porno_
Β° ΰΆ¬βπ _${usedPrefix}porno2_
Β° ΰΆ¬βπ _${usedPrefix}randomxxx_
Β° ΰΆ¬βπ _${usedPrefix}pechos_
Β° ΰΆ¬βπ _${usedPrefix}yaoi_
Β° ΰΆ¬βπ _${usedPrefix}yaoi2_
Β° ΰΆ¬βπ _${usedPrefix}yuri_
Β° ΰΆ¬βπ _${usedPrefix}yuri2_
Β° ΰΆ¬βπ _${usedPrefix}trapito_
Β° ΰΆ¬βπ _${usedPrefix}hentai_
Β° ΰΆ¬βπ _${usedPrefix}nsfwloli_
Β° ΰΆ¬βπ _${usedPrefix}nsfworgy_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfoot_
Β° ΰΆ¬βπ _${usedPrefix}nsfwass_
Β° ΰΆ¬βπ _${usedPrefix}nsfwbdsm_
Β° ΰΆ¬βπ _${usedPrefix}nsfwcum_
Β° ΰΆ¬βπ _${usedPrefix}nsfwero_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfemdom_
Β° ΰΆ¬βπ _${usedPrefix}nsfwglass_

*<πΌπ½πΌβπππ π»πΌ πΈππ»πππ/>*
*- ππ΄ππΏπΎπ½π³π΄ π° ππ½ π°ππ³πΈπΎ πΎ π½πΎππ° π³π΄ ππΎπ*

Β° ΰΆ¬βπ€ _${usedPrefix}bass_
Β° ΰΆ¬βπ€ _${usedPrefix}blown_
Β° ΰΆ¬βπ€ _${usedPrefix}deep_
Β° ΰΆ¬βπ€ _${usedPrefix}earrape_
Β° ΰΆ¬βπ€ _${usedPrefix}fast_
Β° ΰΆ¬βπ€ _${usedPrefix}fat_
Β° ΰΆ¬βπ€ _${usedPrefix}nightcore_
Β° ΰΆ¬βπ€ _${usedPrefix}reverse_
Β° ΰΆ¬βπ€ _${usedPrefix}robot_
Β° ΰΆ¬βπ€ _${usedPrefix}slow_
Β° ΰΆ¬βπ€ _${usedPrefix}smooth_
Β° ΰΆ¬βπ€ _${usedPrefix}tupai_

*<ββπΈπ πΈβπβπππ/>*

Β° ΰΆ¬βπ³ _${usedPrefix}start_
Β° ΰΆ¬βπ³ _${usedPrefix}next_
Β° ΰΆ¬βπ³ _${usedPrefix}leave_

*<πΉππβπΈπ»πβπΌπ/>*

Β° ΰΆ¬βπ _${usedPrefix}stickersearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}xnxxsearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}animeinfo *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}google *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}letra *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}wikipedia *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}ytsearch *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkdone *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkgoogle *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkmody *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}apkshub *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}happymod *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hostapk *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}revdl *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}toraccino *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}uapkpro *<texto>*_

*<πΈππ»πππ/>* 
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)* 
_(π’π π π ππ πππππππ)_

Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _Te diagnostico con gay_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Fiesta del admin_
Β° ΰΆ¬βπ _Fiesta del administrador_ 
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Noche de paz_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _Buenos tardes_
Β° ΰΆ¬βπ _Buenos noches_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Chica lgante_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Atencion grupo_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _tio que rico_
Β° ΰΆ¬βπ _Viernes_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Un pato_
Β° ΰΆ¬βπ _Nyanpasu_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _Yamete_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _Es puto_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Mierda de Bot_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Epico_
Β° ΰΆ¬βπ _Shitpost_
Β° ΰΆ¬βπ _Rawr_
Β° ΰΆ¬βπ _UwU_
Β° ΰΆ¬βπ _:c_
Β° ΰΆ¬βπ _a_

*<βπΌββπΈπππΌβππΈπ/>*

Β° ΰΆ¬βπ οΈ _${usedPrefix}afk *<motivo>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}ocr *<responde a imagen>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}acortar *<enlace / link / url>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}calc *<operacion math>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}del *<respondre a mensaje del Bot>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}whatmusic *<responde a un audio>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}qrcode *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}readmore *<texto1| texto2>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}styletext *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}traducir *<texto>*_
Β° ΰΆ¬βπ οΈ _${usedPrefix}nowa *<numero>*_

*<ββπΎ - ππππππΌπ - πΌβπβππππΈ/>*

Β° ΰΆ¬βπ΅ _${usedPrefix}balance_
Β° ΰΆ¬βπ΅ _${usedPrefix}claim_
Β° ΰΆ¬βπ΅ _${usedPrefix}lb_
Β° ΰΆ¬βπ΅ _${usedPrefix}levelup_
Β° ΰΆ¬βπ΅ _${usedPrefix}myns_
Β° ΰΆ¬βπ΅ _${usedPrefix}perfil_
Β° ΰΆ¬βπ΅ _${usedPrefix}work_
Β° ΰΆ¬βπ΅ _${usedPrefix}minar_
Β° ΰΆ¬βπ΅ _${usedPrefix}buy_
Β° ΰΆ¬βπ΅ _${usedPrefix}buyall_
Β° ΰΆ¬βπ΅ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
Β° ΰΆ¬βπ΅ _${usedPrefix}verificar_
Β° ΰΆ¬βπ΅ _${usedPrefix}unreg *<numero de serie>*_

*<πππβππΌβπ/>*

Β° ΰΆ¬βπ½ _${usedPrefix}sticker *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sticker *<enlace / link / url>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<enlace / link / url>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sfull *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
Β° ΰΆ¬βπ½ _${usedPrefix}scircle *<responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}sremovebg *<responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}semoji *<tipo> <emoji>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp2 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp3 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp2 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp3 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp4 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp5 *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}pat *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}slap *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}kiss *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}dado_
Β° ΰΆ¬βπ½ _${usedPrefix}wm *<packname> <author>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
Β° ΰΆ¬βπ½ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<ππβπΌβ π πππ»πΌβπΈπ»πβπΌπ/>*

Β° ΰΆ¬βπ > *<funcion>*
Β° ΰΆ¬βπ => *<funcion>*
Β° ΰΆ¬βπ $ *<funcion>*
Β° ΰΆ¬βπ _${usedPrefix}cajafuerte_
Β° ΰΆ¬βπ _${usedPrefix}blocklist_
Β° ΰΆ¬βπ _${usedPrefix}enable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}disable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}enable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}disable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}enable *public*_
Β° ΰΆ¬βπ _${usedPrefix}disable *public*_
Β° ΰΆ¬βπ _${usedPrefix}enable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *anticall*_
Β° ΰΆ¬βπ _${usedPrefix}disable *anticall*_
Β° ΰΆ¬βπ _${usedPrefix}enable *antiprivado*_
Β° ΰΆ¬βπ _${usedPrefix}disable *antiprivado*_
Β° ΰΆ¬βπ _${usedPrefix}msg *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}banchat_
Β° ΰΆ¬βπ _${usedPrefix}unbanchat_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}unbanuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}bc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcchats *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcgc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}cleartpm_
Β° ΰΆ¬βπ _${usedPrefix}restart_
Β° ΰΆ¬βπ _${usedPrefix}update_
Β° ΰΆ¬βπ _${usedPrefix}traba1_ 
Β° ΰΆ¬βπ _${usedPrefix}addprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}delprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', 'πΏπ°ππΏπ°π»', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', 'πΆπΈππ·ππ±', [
['π? π³πΎπ½π°π π?', '/donasi'],
['πΉ πΎππ½π΄π πΉ', '/owner'],
['πΎ πΈπ½π΅πΎπ±πΎπ πΎ', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
throw e
}}
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}*/
