import { PageTitle } from "../../core/components"

function page() {
    return (
        <>
            <PageTitle title={"Developer"} />
            <div className="flex h-screen flex-col items-center justify-center space-y-2 text-2xl">
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
        </>
    )
}

export default page
