import { forwardRef } from "react";
import portfolio01 from "./img/portfolio-01.jpg";
import portfolio02 from "./img/portfolio-02.jpg";
import portfolio03 from "./img/portfolio-03.jpg";
import portfolio04 from "./img/portfolio-04.jpg";
import portfolio05 from "./img/portfolio-05.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Portfolio = forwardRef((props, ref) => {
  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  return (
    <div ref={ref} className="portfolio">
      <h1>My Work </h1>

      <div className="portfolio-items">
        <figure className="portfolio-item">
          <img
            src={portfolio01}
            alt="portfolio item"
            className="portfolio-image"
          />
          <figcaption>
            <h2 className="portfolio-title">Project Name</h2>
            <p className="portfolio-desc">
              A short description could go right here
            </p>
            <Button variant="light" onClick={() => setLgShow(true)}>
              More info
            </Button>
            <div className="modal">
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Project Name 2
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="portfolio-content">
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-full-width"
                      src={portfolio01}
                      alt="portfolio"
                    />
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-pull-left"
                      src={portfolio01}
                      alt="portfolio"
                    />
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-pull-right"
                      src={portfolio01}
                      alt="portfolio"
                    />
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </figcaption>
        </figure>
        <figure className="portfolio-item">
          <img
            src={portfolio02}
            alt="portfolio item"
            className="portfolio-image"
          />
          <figcaption>
            <h2 className="portfolio-title">Project Name</h2>
            <p className="portfolio-desc">
              A short description could go right here
            </p>
            <Button variant="light" onClick={() => setLgShow2(true)}>
              More info
            </Button>
            <div className="modal">
              <Modal
                size="lg"
                show={lgShow2}
                onHide={() => setLgShow2(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Project Name 2
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="portfolio-content">
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-full-width"
                      src={portfolio02}
                      alt="portfolio"
                    />
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-pull-left"
                      src={portfolio02}
                      alt="portfolio"
                    />
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <p>
                      Aenean mattis tristique elementum. Duis massa tellus,
                      tempus non fermentum at, venenatis et augue. Phasellus
                      tristique purus sed sagittis interdum. Duis luctus sapien
                      justo, vel viverra ex convallis et. Maecenas suscipit
                      lacus ut lectus mattis ornare. Vestibulum faucibus purus
                      sit amet erat lobortis, tristique fringilla leo sodales.
                      Interdum et malesuada fames ac ante.
                    </p>
                    <img
                      className="portfolio-pull-right"
                      src={portfolio02}
                      alt="portfolio"
                    />
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </figcaption>
        </figure>
        <figure className="portfolio-item">
          <img
            src={portfolio03}
            alt="portfolio item"
            className="portfolio-image"
          />
          <figcaption>
            <h2 className="portfolio-title">Project Name</h2>
            <p className="portfolio-desc">
              A short description could go right here
            </p>
            <a href="http://localhost:3000/" className="portfolio-link">
              More info
            </a>
          </figcaption>
        </figure>
        <figure className="portfolio-item">
          <img
            src={portfolio04}
            alt="portfolio item"
            className="portfolio-image"
          />
          <figcaption>
            <h2 className="portfolio-title">Project Name</h2>
            <p className="portfolio-desc">
              A short description could go right here
            </p>
            <a href="http://localhost:3000/" className="portfolio-link">
              More info
            </a>
          </figcaption>
        </figure>
        <figure className="portfolio-item featured">
          <img
            src={portfolio05}
            alt="portfolio item"
            className="portfolio-image"
          />
          <figcaption>
            <h2 className="portfolio-title">Project Name</h2>
            <p className="portfolio-desc">
              A short description could go right here
            </p>
            <a href="http://localhost:3000/" className="portfolio-link">
              More info
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
});

export default Portfolio;
