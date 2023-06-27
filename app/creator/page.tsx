import { PageTitle } from "../../core"

function page() {
    return (
        <div className="min-h-screen">
            <PageTitle title={"Developer"} />
            <div className="flex flex-col items-center justify-center space-y-2 pt-80 text-center text-lg sm:text-2xl">
                <p>
                    This website was designed & developed by{" "}
                    <span>
                        <b>Beau Hawkinson</b>
                    </span>
                    .
                </p>
                <p>Please reach out for your wedding, or website ideas.</p>
                <p>
                    Phone:{" "}
                    <span>
                        <b>651-367-4529</b>
                    </span>
                </p>
                <p>
                    Email:{" "}
                    <span>
                        <b>hawkinson.beau@yahoo.com</b>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default page
