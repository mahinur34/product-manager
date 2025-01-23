import { Roboto, Montserrat } from "next/font/google"
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto'
})
export const montserrat = Montserrat({ //obje tanımlıyoruz
    subsets: ['latin'], //burada kısıtlama yapmış oluyoruz, ben sadece latin kull.
    weight: ['400', '500', '700'], //sadece bu büyüklükleri kull. demek
    variable: '--font-montserrat' //aktarmak için kullanacağımız variable
})

//npm run build yapınca bu aşamada fontları google dan çekiyor, projenin içine yerleştiriyor
//preloaing yapıyor, fontlar gelmeden uygulama açılmıyor bu şekilde layout shifting in önüne geciyor.

//fontu scss veya css te import edemeyiz, js te veya jsx içinde almalıyız., çünkü js ifadesini css te import edemeyiz.