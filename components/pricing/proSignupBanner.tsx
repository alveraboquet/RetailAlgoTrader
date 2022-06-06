import Link from 'next/link';

interface Props {
  isPro: boolean | undefined;
}

const ProSignupBanner = ({ isPro }: Props) => {
  return (
    <>
      {isPro ? (
        <></>
      ) : (
        <div className="alert alert-danger m-3 text-center">
          You currently have a Hobby account. If you would like to upgrade to a
          Pro membership please click
          <button className="btn btn-warning ms-3">
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
