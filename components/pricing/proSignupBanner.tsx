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
        <div className="alert alert-danger m-1 mt-0 p-1 m-md-3 mt-md-4 text-center">
          <div className="d-none d-md-block">
            You currently have a Hobby account. If you would like to upgrade to
            a Pro membership please click here:
            <Link href="/app/proSignup">
              <button className="btn btn-warning ms-2">Upgrade to Pro</button>
            </Link>
          </div>
          <div className="d-md-none">
            Currently on Hobby account:
            <Link href="/app/proSignup">
              <button className="btn btn-warning ms-1">Upgrade to Pro</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProSignupBanner;
