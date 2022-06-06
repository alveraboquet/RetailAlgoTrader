import Image from 'next/image';
import { MONTHLY_AMOUNT, ANNUAL_AMOUNT } from '../../stripe.config';
import SignUpButton from './signUpButton';

interface Props {
  signedIn: boolean;
  monthly: boolean;
}

const PricingTable = ({ signedIn, monthly }: Props) => {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped text-successtable-border border-light">
          <thead className="border-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <strong>Hobby</strong>
              </th>
              <th scope="col">
                <strong>Pro</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mini Courses</th>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Advanced Guides</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Pro Courses</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Academies</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Template Generator</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">All Future Content</th>
              <td>-</td>
              <td className="text-success">
                <Image
                  src="/images/svgs/checkmark.svg"
                  alt="Checkmark Icon"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td className="fw-bold">Free</td>
              <td className="fw-bold">
                {monthly ? `$${MONTHLY_AMOUNT}/mo` : `$${ANNUAL_AMOUNT}/mo`}
              </td>
            </tr>
            {signedIn ? (
              <></>
            ) : (
              <tr>
                <th></th>
                <th>{signedIn ? <></> : <SignUpButton />}</th>
                <th>{signedIn ? <></> : <SignUpButton />}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
