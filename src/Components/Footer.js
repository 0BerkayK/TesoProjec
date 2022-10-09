import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerImage">
        <img
          width={217.42}
          height={179.5}
          alt="footergörsel"
          src="https://s3-alpha-sig.figma.com/img/6b9e/9c3e/e4b3dbbc7e44c673d3e476048622ac44?Expires=1665360000&Signature=Nu-nr0FwaYdaPbIjtik4Lhy9y71dmHcDoNnCAsFxjdUkTDuB4dqR~YDOE9EbmQyr~9BXCw36PNFnhTvT8fILROJYeSq0ps2m1dmYZszVepzNn5~m17rpD7a8O9tS7SNzZZ1Gy0trUAj1~EgcTUC6gxusHo~TUw2yYVilCrpvp1cuoIVun6pLMgoyi-CPLG7qCE4KN-kx07VK~o3ChTfnCtAcM85TgABxkE7geB769oZ-FN1UrlNRRCpEgbo4bX9Q4hhiLQhE6xG88S2iRn9RKruUZVdOBlWoBrT5wyOhr6ydVClY5Z8zOqdtmMcS7FOb0aZK9RR6EKv227JbvlwUGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        ></img>
      </div>
      <div>
        <h6 className="footerText">
          İletişim <br></br>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
          Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul<br></br><br></br>
          Email:bilgi@tesodev.com
        </h6>
      </div>
      <div className="footerMap">
      <iframe 
      title="map"
      src="https://www.google.com/maps/d/embed?mid=1oZAQNMiqzfGjpuqLpWF07S3GMVYUjzY&ehbc=2E312F" width="467" height="222"></iframe>
      </div>
    </div>
  );
}
