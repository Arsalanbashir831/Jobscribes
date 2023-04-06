import Link from "next/link";


function Company({name,rates,location,open_jobs}) {
    return (<>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                <div className="image-box">
                    <Link legacyBehavior href="/company-details">
                        <a>
                            <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                        </a>
                    </Link>
                </div>
                <div className="info-text mt-10">
                    <h5 className="font-bold">
                        <Link legacyBehavior href="/company-details">
                            <a>{name}</a>
                        </Link>
                    </h5>
                    <div className="mt-5">
                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                        <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                        <span className="font-xs color-text-mutted ml-10">
                            <span>(</span>
                            <span>{rates}</span>
                            <span>)</span>
                        </span>
                    </div>
                    <span className="card-location">{location}</span>
                    <div className="mt-30">
                        <Link legacyBehavior href="/jobs-grid">
                            <a className="btn btn-grey-big">
                                <span>{open_jobs}</span>
                                <span> Jobs Open</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Company;