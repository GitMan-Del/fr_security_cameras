export default function Map() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.603966061345!2d2.295009076234556!3d48.87514467133445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66feb05e73771%3A0xf6754dce3c1fab31!2s54%20Av.%20Hoche%2C%2075008%20Paris%2C%20Fran%C5%A3a!5e1!3m2!1sro!2sro!4v1762975941178!5m2!1sro!2sro"        
        className="border-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
