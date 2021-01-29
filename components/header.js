import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="logo-box">
              <Logo height={80} />
            </div>
          </div>
          <div className="col-lg-6">
            <h1>Póngale nombre a la RETRO 😮</h1>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          header {
            margin-bottom: 20px;
            text-align: center;
            padding: 10px 0;
          }
          h1 {
            font-size: 2rem;
          }
          .logo-box {
            display: flex;
          }
        `}
      </style>
    </header>
  );
}
