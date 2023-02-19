import React from "react";
import { Link } from "react-router-dom";

function about() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto card about">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h2>Book Rocket'a Hoş Geldin</h2>
            </li>
            <li class="list-group-item">
              <h3>Book Rocket Nedir?</h3>
              <p>
                Book rocket kitap severlerin buluştuğu bir sosyal platformdur.
              </p>
            </li>
            <li class="list-group-item">
              <h3>Bu Sitede Ne Yapabilirsin?</h3>
              <p>
                <ul>
                  <li>Editörlerin ekledikleri kitapları beğenebilir ve yorumlayabilirsin.
                  </li>
                  <li>Profilini düzenleyebilir ve başka kullanıcıların profillerine bakabilirsin.
                  </li>
                  <li>Seninle aynı zevklere sahip kullanıcılara arkadaş ekliyebilirsin.</li>
                  <li>Arkadaş eklediğin kullanıcılar ile sohbet edebilirsin.</li>
                  <li>Editör olup kitap ekliyebilirsin.</li>
                </ul>
                  <Link to="/login-register"><button className="btn btn-outline-dark">Book Rocket'i Keşfetmeye Başlayın</button></Link>         
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default about;
