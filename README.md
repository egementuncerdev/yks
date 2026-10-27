# Netlik — YKS çalışma programı

**yks.egementuncer.dev** · Ücretsiz, hesap gerektirmeyen YKS çalışma asistanı. Öğrenci 8 soruya cevap verir; puan türüne, sınava kalan süreye, günlük boş saatlerine ve ders seviyelerine göre gün gün program oluşur. Konu testleri her sorunun çözümüyle gelir.

## Çalıştırma

```bash
npm install
npm run dev        # geliştirme
npm test           # testler
npm run build      # tsc + vite build → dist/
npm run deploy     # build + wrangler deploy (Cloudflare Workers static assets)
```

## Yapı

| Klasör | İçerik |
|---|---|
| `src/content/exam.ts` | Testler, soru sayıları, puan türleri, varsayılan (tahmini) sınav tarihi |
| `src/content/subjects.ts` | Dersler, konular, konu hacmi, “sık sorulan” işaretleri, MEB kaynakları |
| `src/content/questions/` | Soru motoru: `core.ts` (tohumlu rastgele, kesir, şık), üreticiler (`tytMat.ts`, `science.ts`), elle yazılmış sorular (`bank.ts`) |
| `src/content/lessons/` | Konu anlatımları, ders başına bir dosya (`tyt-tr.ts` …); anahtar konu adıdır. Her ders ayrı parça olarak yüklenir |
| `src/lib/deneme.ts` | Deneme hesapları (net, gelişim, en çok net kazanılacak test); mini deneme soruları `src/content/questions/mini.ts` |
| `src/lib/planner.ts` | Program oluşturucu (saf fonksiyon, testli) |
| `src/lib/storage.ts` | IndexedDB (Dexie): profil, konu durumları, program, test sonuçları, yanlışlar, yedek |
| `src/features/` | Ekranlar: tanıtım, kurulum, bugün, hafta, konular, anlatımlar, testler, denemeler, ayarlar |

## Hesap ve eşitleme

- Sunucu: `worker/index.ts` (Cloudflare Worker, yalnız `/api/*`), veritabanı D1 `netlik` (şema `migrations/`).
- Hesap: kullanıcı adı + şifre (PBKDF2), e-posta yok; şifre kurtarma kodla. Oturum HttpOnly çerez.
- İstemci: `src/lib/sync.ts`. Bu cihazdaki IndexedDB asıl kaynak; değişiklikler hesaba yüklenir, sürüm numarasıyla çakışma yakalanır, öğrenci seçer.
- Yerelde: `npx wrangler d1 migrations apply netlik --local`, sonra `npm run build && npx wrangler dev --port 8787` (Vite dev sunucusu `/api`'yi buraya yönlendirir).
- Yeni şema: `migrations/` içine yeni dosya, sonra `npx wrangler d1 migrations apply netlik --remote`.

## Güncelleme notları

- **ÖSYM 2027 takvimi açıklanınca:** `src/content/exam.ts` içinde `DEFAULT_EXAM_DATE` ve `EXAM_DATE_IS_OFFICIAL = true`.
- **Kılavuz değişirse:** `TESTS` (test ve ders soru sayıları). Test, toplamların sınav soru sayısıyla tuttuğunu kontrol eder.
- **Yeni soru:** elle yazılmışsa `bank3.ts` sonuna (doğru cevap ilk şık, altıncı alan ipucu; eski dosyalardaki sıra değişmemeli); hesaplamalıysa ilgili dosyaya üretici. `npm test` her üreticiyi 300 tohumla dener.
- **Görsel ve şema:** `src/content/lessons/figures.ts`, `figures2.ts` ve `figures3.ts` (formül kartı, çubuk ve çizgi grafik, “Akılda tut” kutusu) (anahtar `dersId:Konu adı`; tablo, zaman çizelgesi, akış, Punnett ya da çizim). Çizimler `src/features/lessons/Diagrams.tsx` içinde, renkler tema değişkenlerinden. Test, anahtarların ve çizim adlarının geçerli olduğunu kontrol eder.
- **Konu anlatımı:** `src/content/lessons/<ders>.ts` içinde konu adıyla. Test, her konunun anlatımı olduğunu ve adların `subjects.ts` ile tuttuğunu kontrol eder. İpuçları: `src/content/questions/hints.ts` (BANK ile aynı sıra).
- **İçerik listesi:** `REVIEW=1 npx vitest run src/content/questions/review.test.ts` → `CONTENT_REVIEW.md`.
- Konu id'leri ilerleme kaydında kullanılır; konu adını değiştirirken eski id'yi koru.
