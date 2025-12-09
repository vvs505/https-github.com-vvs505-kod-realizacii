export interface ProgramStep {
  name: string;
  block: string;
  description: string;
  results: string[];
  illustration: string;
  illustrationPrompt: string;
}

export interface IllustrationPrompts {
  hero: string;
  step_puja: string;
  step_kriya: string;
  step_meditation: string;
  step_writing: string;
  reviews: string;
  button: string;
  icons: string;
  divider: string;
  background_spots: string;
  accents: string;
}

export interface ReviewItem {
  text: string;
  author: string;
}

export interface ContentData {
  landing: {
    title: string;
    style: {
      palette: string[];
      illustration_prompts: IllustrationPrompts;
    };
    hero_block: {
      headline: string;
      subheadline: string;
      description: string;
      date: string;
      cta: string;
      extra: string;
    };
    audience_block: {
      title: string;
      bullets: string[];
      conclusion: string;
    };
    program: {
      title: string;
      steps: ProgramStep[];
    };
    gift_block: {
      title: string;
      subtitle: string;
      description: string;
      contents: string[];
      result: string;
    };
    reviews_block: {
      title: string;
      items: ReviewItem[];
    };
    about_block: {
      title: string;
      name: string;
      bio: string;
    };
    details_block: {
      date: string;
      time: string;
      place: string;
      slots: string;
      price: string;
    };
    cta_final: {
      text: string;
      button: string;
      note: string;
    };
  };
}