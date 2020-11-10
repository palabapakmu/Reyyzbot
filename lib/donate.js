exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${Reyyz}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? 

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: -
⚜ *DANA*: -
⚜ *PULSA*: 083138431208
⚜ *GOPAY*: 083138431208

📺 *Iklan* :

✅ Follow akun instagram admin ${@muza_raihan}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${Reyyz} ?*
☎️ WA : *${083138431208}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${setiap hari} ‼️

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
