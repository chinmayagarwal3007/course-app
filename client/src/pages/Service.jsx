import { useAuth } from "../store/auth";
export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((currElem, index) => {
          const { service, description, price, provider } = currElem;
          const capitalizedService = service.replace(/\b\w/g, (char) => char.toUpperCase());
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our service info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{capitalizedService}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
