import Link from 'next/link';

interface Props {
  isPro: boolean | undefined;
}

// Signup banner for pro membership if currently on a free hobby account
const ProSignupBanner = ({ isPro }: Props) => {
  return (
    <>
      {isPro ? (
        <></>
      ) : (
        <div className="alert alert-danger m-md-3 text-center">
          <p>
            You currently have a Hobby account. If you would like to upgrade to
            a Pro membership please click below:
          </p>
          <button className="btn btn-warning ms-0 ms-md-3">
            <Link href="/app/proSignup">
              <a className="text-decoration-none text-dark">Upgrade to Pro</a>
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default ProSignupBanner;
