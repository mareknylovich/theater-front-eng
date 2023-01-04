import React from 'react';

export const PaymentPopupView = ({ hours, price, title }) => (
  <div className="popup" style={{ display: 'block' }}>
    <div className="window">
      <p className="modal-send mb-0">
        Play
        <br />
        <b>
          «<span id="BookingOrder">{title}</span>»
        </b>
      </p>
      <br />
      <button className="btn close">
        <i className="fas fa-times" />
      </button>
      <div className="form-group">
        <label>YOUR NAME</label>
        <input type="text" className="form-control mt-2" id="purchaserName" minLength={2} required />
      </div>
      <div className="form-group">
        <label>City</label>
        <select className="form-control mt-2" id="purchaserCity">
          <option>Voetbalstraat 22, 1012 XL Amsterdam</option>
          <option>Witte de Withstraat 93, 3012 BN Rotterdam</option>
          <option>Rabbijn Maarsenplein 7, 2512 HJ Den Haag</option>
          <option>Bygdøynesveien 36, 0286 Oslo</option>
          <option>Kungsgatan 66, 111 22 Stockholm</option>
          <option>Kungsgatan 8, 411 19 Göteborg</option>
          <option>Niederdorfstrasse 62, 8001 Zürich</option>
          <option>Rue de l'Industrie 13, 1201 Genève</option>
          <option>Kärntner Str. 51, 1010 Wien</option>
          <option>600 W 9th St, Los Angeles, CA 90015</option>
          <option>43 E Ohio St, Chicago, IL 60611</option>
          <option>422 Little Collins St, Melbourne VIC 3000</option>
          <option>Shop RG05, 500 George St, Sydney NSW 2000</option>
          <option>Bd Charlemagne 44, 1000 Bruxelles</option>
          <option>197 Spadina Ave. suite 400, Toronto</option>
          <option>1010 Sainte-Catherine O, Montréal, QC H3B 3S3</option>
          <option>1201 5 St SW, Calgary, AB T2R 0Y6</option>
          <option>27 Woolwich Rd, London SE10 0RA</option>
          <option>671A Fulham Rd., London SW6 5PZ</option>
          <option>5 Lower Temple St, Birmingham B2 4JD</option>
          <option>59 Whitechapel, Liverpool L1 6DX</option>
          <option>75 Southmill St, Manchester M2 5PF</option>
        </select>
      </div>
      <div className="form-group">
        <label>Show time</label>
        <select className="form-control mt-2" id="purchaserTime">
          <option>13:00</option>
          <option>20:00</option>
        </select>
      </div>
      <div className="form-group">
        <label>Select a line</label>
        <select className="form-control mt-2" id="purchaserLength">
          <option value="nothing" selected disabled>
            Select a line
          </option>
          <option value="VIP">VIP-Loge</option>
          <option value={1}>Series 1</option>
          <option value={2}>Series 2</option>
          <option value={4}>Series 4</option>
          <option value={6}>Series 6</option>
          <option value={7}>Series 7</option>
          <option value={9}>Series 9</option>
        </select>
      </div>
      <div id="purchaserSitForm" className="form-group" hidden>
        <label>Choose a location</label>
        <select className="form-control mt-2" id="purchaserSit"></select>
      </div>
      <input
        type="hidden"
        className="form-control text-uppercase"
        id="purchaserPromo"
        defaultValue
        disabled="true"
      />
      <div id="rowPrice" className="form-group mt-4" hidden>
        <label className="modal-price">
          Total:{' '}
          <b>
            <span id="totalPrice">0</span> €.
          </b>
        </label>
      </div>
      <button id="BookingSubmit" className="button button-primary mt-4" norow>
        A number must be selected
      </button>
      <small className="form-text text-muted mt-3">
        Ticket prices vary depending on the number of,
        <br />
        the closer to the stage, the more expensive.
        <br />
        You can at any time
        <br />
        make a refund!
      </small>
    </div>
  </div>
);
