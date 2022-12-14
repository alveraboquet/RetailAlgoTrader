import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imagePath: string;
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  cardTitle: string;
  cardText: string;
  postPath: string;
  buttonText: string;
}

// Bootstrap card component for posts on blog homepage
const PostCard = ({
  imagePath,
  imageHeight,
  imageWidth,
  imageAlt,
  cardTitle,
  cardText,
  postPath,
  buttonText,
}: Props) => {
  return (
    <article className="card h-100 m-3 bg-light">
      <figure>
        <Image
          src={imagePath}
          className="card-img-top"
          height={imageHeight}
          width={imageWidth}
          alt={imageAlt}
        />
      </figure>
      <div className="card-body">
        <p className="card-title fs-3 fw-bold">{cardTitle}</p>
        <p className="card-text">{cardText}</p>
        <Link href={postPath}>
          <button className="btn btn-warning w-100">{buttonText}</button>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
