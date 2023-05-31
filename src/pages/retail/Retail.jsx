import { Link } from "react-router-dom";
import { Fade } from "components/fade/Fade";
import "pages/projectspage.scss";

export default function Retail() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="retail">
      <Fade>
        <div className="page-title">
          <h3 className="title-date">2023</h3>
          <h1 className="title-large">RETAIL API</h1>
        </div>
        <div className="page-section-content">
          <div className="page-scope">
            <h3>SCOPE</h3>
            <ul>
              <li>Large Database to play with</li>
              <li>JWT token authentication</li>
              <li>Python, Django, DRF</li>
            </ul>
          </div>
          <div className="page-summary">
            <h3>SUMMARY</h3>
            <p>
              This API will give you a huge amount of products you can find in any retail shop in France.
              <br /><br />
              You can search by brand, category, name, ean... It's will return a list of products matching these parameters.
              <br /><br />
              Each endpoints are protected by JWT token, this API provide a login/register system for Front-End developers who want to use the API.
              Endpoints are paginated and limit excessive amount of data...
            </p>
              <a href="/retail-api">Go to site...</a>
              <a href="https://github.com/SAUBIN-Florian/maul-api" target="blank">Check the code...</a>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="page-section-api-doc">
          <h3>HOW TO USE THE API</h3>
          <p>
            You can go to the base URL: <code className="endpoint">http://localhost:8000/api/</code> it will return a global state of the API:
          </p>
          <br/>
          <pre className="json-pre">
            <span className="dot">...</span>
            <br/>
            <span className="bracket">&#123;</span>
            <br/>
            <span className="json-body indent_1x">'version': '1.0.0',</span>
            <br/>
            <span className="json-body indent_1x">'number_of_products': 99110,</span>
            <br/>
            <span className="json-body indent_1x">'number_of_brands': 12204,</span>
            <br/>
            <span className="json-body indent_1x">'number_of_categories': 17732,</span>
            <br/>
            <span className="json-body indent_1x">'info': 'Some important info'</span>
            <br/>
            <span className="bracket">&#125;</span>
            <br/>
            <span className="dot">...</span>
          </pre>
          <p>
            Search by product, brand or category: <code className="endpoint">/api/brand/</code> it will return the first 100 elements:
          </p>
          <br/>
          <pre className="json-pre">
            <span className="dot">...</span>
            <br/>
            <span className="hook">&#91;</span>
            <br/>
            <span className="bracket indent_1x">&#123;</span>
            <br/>
            <span className="json-body indent_2x">'name': 'Danone',</span>
            <br/>
            <span className="json-body indent_2x">'created_at': '2023-05-30T14:30:00+0000',</span>
            <br/>
            <span className="bracket indent_1x">&#125;,</span>
            <br/>
            <span className="bracket indent_1x">&#123;</span>
            <br/>
            <span className="json-body indent_2x">'name': 'Marks & Spencer',</span>
            <br/>
            <span className="json-body indent_2x">'created_at': '2023-05-30T14:30:00+0000',</span>
            <br/>
            <span className="bracket indent_1x">&#125;,</span>
            <br/>
            <span className="dot indent_1x">...</span>
            <br/>
            <span className="hook">&#93;</span>
            <br/>
            <span className="dot">...</span>
          </pre>
        </div>
      </Fade>
      <Fade>
        <div className="page-section-api-doc">
          <h3>NOW ADD SOME PARAMETERS</h3>
          <p>
            You can be more particular with parameters: <code className="endpoint">/api/product/?name=Nutella</code> it will return a list matching it:
          </p>
          <br/>
          <pre className="json-pre">
            <span className="dot">...</span>
            <br/>
            <span className="hook">&#91;</span>
            <br/>
            <span className="bracket indent_1x">&#123;</span>
            <br/>
            <span className="json-body indent_2x">'ean': 3467278719,</span>
            <br/>
            <span className="json-body indent_2x">'name': 'Nutella pot 1kg',</span>
            <br/>
            <span className="json-body indent_2x">'quantity': '1kg',</span>
            <br/>
            <span className="json-body indent_2x">'brand': 'Kinder, Ferrero',</span>
            <br/>
            <span className="json-body indent_2x">'categories': &#91;'Sucrés', 'Pâte à tartiner'&#93;</span>
            <br/>
            <span className="bracket indent_1x">&#125;,</span>
            <br/>
            <span className="bracket indent_1x">&#123;</span>
            <br/>
            <span className="json-body indent_2x">'ean': 38482326003,</span>
            <br/>
            <span className="json-body indent_2x">'name': 'Colis Nutella par 6',</span>
            <br/>
            <span className="json-body indent_2x">'quantity': '6 x 100g',</span>
            <br/>
            <span className="json-body indent_2x">'brand': 'Kinder, Ferrero',</span>
            <br/>
            <span className="json-body indent_2x">'categories': &#91;'Sucrés', 'Pâte à tartiner'&#93;</span>
            <br/>
            <span className="bracket indent_1x">&#125;,</span>
            <br/>
            <span className="dot indent_1x">...</span>
            <br/>
            <span className="hook">&#93;</span>
            <br/>
            <span className="dot">...</span>
          </pre>
        </div>
        <div className="page-section-api-doc">
          <p>For more information, check the <a href="https://github.com/SAUBIN-Florian/maul-api/blob/main/README.md" target="_blank" rel="noreferrer">documentation</a>...</p>
        </div>
      </Fade>
      <div className="page-section-link">
        <Link to="/landing-page" className="previous-link" data-arrow="&#129024;" onClick={handleScrollTop}>Landing Page</Link>
        <Link to="/planetarium" className="next-link" data-arrow="&#129026;" onClick={handleScrollTop}>Planetarium</Link>
      </div>
    </div>
  )
}