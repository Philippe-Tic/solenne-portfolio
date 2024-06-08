export type extraContent = {
  url: string;
  title: string;
}

export type Image = {
  url: string;
  title: string;
  content: string;
  extraContent?: extraContent[]
}

export type Images = Image[][]
