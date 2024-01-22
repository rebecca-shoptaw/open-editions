export type BookProps = {
  id?: number[];
  title: string;
  author: string;
  pub_year: number;
  url: string;
  cover: string;
  cover_size?: string;
  cover_position?: string;
  reader?: string;
  reader_url: string;
};

export type AudiobookPageProps = {
  book:BookProps,
  stopListening:() => void;
}

export type HomepageProps = {
  setActiveBook:React.Dispatch<React.SetStateAction<BookProps>>;
  startListening:() => void;
}

export type FeaturedBookProps = {
  book:BookProps,
  setActiveBook:React.Dispatch<React.SetStateAction<BookProps>>;
  startListening:() => void;
}

export type AnchorProps = {
  id:string;
}