# PLAN — yks.egementuncer.dev

Herkese açık, ücretsiz YKS çalışma asistanı. Türkçe arayüz, hesap yok, veriler öğrencinin tarayıcısında (IndexedDB).

## Kararlar
- **Stack:** Vite + React + TypeScript + Tailwind 4 + React Router + Dexie (İspanyolca uygulamasıyla aynı). Deploy: Cloudflare Workers static assets, `yks.egementuncer.dev`.
- **Sınav tarihi:** ÖSYM 2027 takvimini henüz açıklamadı. Varsayılan tarih *tahmini* olarak işaretli (19 Haziran 2027, TYT); öğrenci değiştirebilir. Takvim açıklanınca `src/content/exam.ts` güncellenir.
- **Soru sayıları:** 2026 YKS kılavuzundaki test ve ders dağılımı (TYT 120 soru/165 dk, AYT 160/180, YDT 80/120).
- **Konu listeleri:** Yaygın konu sınıflandırması. ÖSYM konu bazlı soru dağılımı açıklamaz; uygulama konu başına "sıklık" iddia etmez, yalnızca konunun **hacmini** (küçük/orta/büyük) kullanır.
- **Doğruluk:** Emin olunmayan bilgi konmaz. Sorular (Faz 3) yalnızca doğruluğu kontrol edilebilenlerle başlar; her sorunun çözümü yazılır.

## Fazlar
1. **Sorularla program** — kurulum sihirbazı (alan, durum, sınav tarihi, haftalık uygun saatler, ders seviyeleri, son netler), konu listeleri, program oluşturucu (testli), Bugün / Hafta / Konular ekranları, ayarlar, dışa/içe aktarma, deploy.
2. **Deneme takibi** — net hesaplayıcı, deneme kaydı, ders bazında net grafiği, zayıf derslere göre programın yeniden ağırlıklandırılması.
3. **Konu testleri** — konu bazlı kısa testler, çözüm açıklamaları, yanlışların tekrar listesine düşmesi.
4. **Cila** — erişilebilirlik, boş durumlar, mobil, odak (pomodoro) zamanlayıcı, README.
