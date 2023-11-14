import { Book } from "@/utils/apis/books";

interface Props {
  data: Book;
}

const BookCard = (props: Props) => {
  const { data } = props;

  return (
    <div className="flex flex-col p-4 items-center gap-3 w-48 md:w-56 lg:w-64 h-fit rounded-lg" style={{ background: "#05BFDB"}}>
      <figure className="overflow-hidden shadow-lg">
        <img
          className="h-auto w-auto object-cover aspect-[3/4]"
          src={data.cover_image}
          alt={data.title}
        />
      </figure>
      <p className="font-bold text-lg tracking-wide text-center">
        {data.title}
      </p>
      <p className="text-muted-foreground text-sm text-center">{data.author}</p>
    </div>
  );
};

export default BookCard;