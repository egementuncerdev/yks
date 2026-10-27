/* /gizlilik — Netlik gizlilik metni. Sade dil; hesap açan ve açmayan için ayrı ayrı ne olduğunu anlatır.
   Metin sunucudaki gerçek davranışla uyumlu olmalı (worker/index.ts: şifre özeti, çerez, IP özeti 24 saat). */
import { Link } from 'react-router';
import { useTitle } from '@/lib/title';

const EMAIL = 'egementuncerbusiness@gmail.com';
const UPDATED = '27 Ekim 2026';

const S = ({ h, children }: { h: string; children: React.ReactNode }) => (
  <section className="mt-8"><h2 className="display text-lg">{h}</h2><div className="mt-2 space-y-3 leading-relaxed text-ink-2">{children}</div></section>
);
const Li = ({ children }: { children: React.ReactNode }) => <li className="flex gap-3"><span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-2" aria-hidden="true" /><span>{children}</span></li>;

export default function Privacy() {
  useTitle('Gizlilik');
  return (
    <article className="mx-auto max-w-2xl">
      <h1 className="display text-[1.9rem] leading-tight">Gizlilik</h1>
      <p className="mt-3 text-[1.075rem] leading-relaxed text-ink-2">Netlik’te reklam ve takip yok. Bu sayfa, hangi bilgilerin neden ve nerede tutulduğunu sade bir dille anlatır.</p>
      <p className="mt-2 text-sm text-muted">Son güncelleme: {UPDATED}</p>

      <S h="Kısaca">
        <ul className="space-y-2">
          <Li><span className="font-medium text-ink">Hesap açmak zorunlu değil.</span> Açmazsan verilerin yalnız kullandığın tarayıcıda kalır; sunucuya hiçbir şey gönderilmez.</Li>
          <Li><span className="font-medium text-ink">Hesap açarsan</span> yalnız kullanıcı adın, şifrenin özeti ve çalışma verilerin saklanır; amacı verilerini cihazların arasında eşitlemektir.</Li>
          <Li>E-posta, telefon, ad soyad, yaş, okul ya da konum <span className="font-medium text-ink">istenmez.</span></Li>
          <Li>Veriler satılmaz, kimseyle paylaşılmaz, reklam ya da profil çıkarmak için kullanılmaz.</Li>
          <Li>Hesabını istediğin an kendin silebilirsin.</Li>
        </ul>
      </S>

      <S h="Kim?">
        <p>Netlik’i Egemen Tuncer geliştirir ve işletir. Bu sayfayla ya da verilerinle ilgili her soru için: <a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </S>

      <S h="Hesap açmazsan">
        <p>Kurulum cevapların, programın, konu durumların, test ve deneme sonuçların yalnız bu tarayıcının deposunda (IndexedDB) durur. Tema seçimi gibi küçük tercihler de tarayıcıda (localStorage) saklanır. Bunlar sunucuya gönderilmez.</p>
        <p>Site, tarayıcıdan bu verileri kendiliğinden silmemesini ister. Yine de tarayıcı verilerini temizlersen ya da başka bir cihaza geçersen veriler gelmez; bunun için hesap açabilir ya da <Link to="/ayarlar" className="text-primary-ink underline decoration-line-2 underline-offset-4">Ayarlar</Link>’dan yedek dosyası indirebilirsin.</p>
      </S>

      <S h="Hesap açarsan neler saklanır?">
        <ul className="space-y-2">
          <Li><span className="font-medium text-ink">Kullanıcı adın.</span> Gerçek adını kullanman gerekmez.</Li>
          <Li><span className="font-medium text-ink">Şifrenin ve kurtarma kodunun özeti.</span> Şifrenin kendisi saklanmaz; geri çözülemeyen bir özeti (PBKDF2) tutulur. Bu yüzden şifreni ben de göremem.</Li>
          <Li><span className="font-medium text-ink">Çalışma verilerin:</span> puan türün, sınıf durumun, günlük çalışma saatlerin, derslerdeki seviyen ve girdiğin deneme netleri; programın; konu durumların; test sonuçların ve yanlış yaptığın sorular; deneme sonuçların.</Li>
          <Li><span className="font-medium text-ink">Oturum kaydı:</span> giriş yaptığında oluşturulan rastgele anahtarın özeti ve bitiş tarihi.</Li>
        </ul>
        <p>Bu bilgiler yalnız hizmeti sunmak için, yani verilerini cihazların arasında eşitlemek ve hesabını korumak için kullanılır.</p>
      </S>

      <S h="Çerezler">
        <p>Yalnız giriş yaptığında, oturumunu açık tutmak için <code className="rounded bg-sunken px-1">netlik_oturum</code> adlı zorunlu bir çerez yerleştirilir. 90 gün geçerlidir; çıkış yapınca silinir. Tarayıcıdaki betikler bu çerezi okuyamaz. Reklam, analiz ya da takip çerezi yoktur.</p>
      </S>

      <S h="Kötüye kullanıma karşı koruma">
        <p>Şifre denemelerini ve toplu hesap açmayı önlemek için başarısız denemeler sayılır. Bunun için IP adresin düz olarak değil, geri çevrilemeyen bir özeti olarak tutulur ve en geç 24 saat sonra silinir.</p>
      </S>

      <S h="Veriler nerede ve ne kadar süre tutulur?">
        <p>Site ve hesap verileri <span className="font-medium text-ink">Cloudflare</span> altyapısında (Workers ve D1 veritabanı) çalışır. Cloudflare’in veri merkezleri Türkiye dışında olabilir; bu, verilerin yurt dışında işlenmesi anlamına gelir. Cloudflare, hizmeti işletmek ve korumak için istek zamanı ve IP adresi gibi teknik kayıtları kendi kuralları çerçevesinde kısa süre tutabilir.</p>
        <p>Hesap verilerin, hesabını silene kadar saklanır. Hesabı sildiğinde sunucudaki kullanıcı adın, şifre özetin, oturumların ve çalışma verilerin hemen silinir. Veritabanının teknik geri yükleme özelliği nedeniyle silinen kayıtlar en çok 30 gün boyunca sistem yedeklerinde kalabilir; bu yedekler başka bir amaçla kullanılmaz.</p>
      </S>

      <S h="18 yaşından küçüksen">
        <p>Netlik kimlik ya da iletişim bilgisi istemez. Yine de hesap açmadan önce bu sayfayı bir velinle birlikte okumanı öneririz.</p>
      </S>

      <S h="Haklarınız">
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, hakkında hangi bilgilerin bulunduğunu öğrenmek, düzeltilmesini ya da silinmesini istemek için bana <a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a> adresinden yazabilirsin. Çoğunu kendin de yapabilirsin:</p>
        <ul className="space-y-2">
          <Li><Link to="/ayarlar" className="text-primary-ink underline decoration-line-2 underline-offset-4">Ayarlar</Link> → Yedek → İndir: verilerinin tam bir kopyası.</Li>
          <Li><Link to="/hesap" className="text-primary-ink underline decoration-line-2 underline-offset-4">Hesap</Link> → Hesabı sil: hesabın ve sunucudaki bütün verilerin silinir.</Li>
        </ul>
        <p>E-posta ile yazarken kullanıcı adını belirtmen yeterli; e-posta adresin yalnız sana cevap vermek için kullanılır.</p>
      </S>

      <S h="Dış bağlantılar">
        <p>Sitedeki MEB arşivleri gibi dış bağlantılara tıkladığında o sitenin kendi gizlilik kuralları geçerli olur.</p>
      </S>

      <S h="Değişiklikler">
        <p>Bu metin değişirse yukarıdaki tarih güncellenir. Saklanan bilgilerin kapsamı genişlerse bunu sitede ayrıca duyururum.</p>
      </S>
    </article>
  );
}
