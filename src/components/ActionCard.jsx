function ActionCard() {
  return (
    <section>
      <div className="container-lg">
        <div
          className="w-60 mx-auto bg-white px-5 pb-5 position-relative rounded-3 text-center"
          style={{ marginTop: "-80px", zIndex: 4 }}
        >
          <div className="mb-5">
            <img
              style={{ marginTop: "-30px" }}
              src="/images/logo-mastercraft.svg"
              alt="Mastercraft Logo"
            />
          </div>
          <h3 className="fw-bold text-capitalize">
            Mastercraft Bamboo Monitor Riser
          </h3>
          <p className="text-secondary ">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="row justify-content-between mt-4">
            <button
              type="button"
              className="btn btn-primary btn-pill col-lg-4  col-md-5 fw-bold"
            >
              Back this project
            </button>
            <button
              type="button"
              className="btn btn-bookmark btn-pill col-lg-4 col-md-5 text-secondary fw-bold"
            >
              <img src="/images/icon-bookmark.svg" alt="Bookmark svg" />
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionCard;
