import { StringFilter } from "clarity-angular";
import { Story } from "../story";

export class StoryFilter implements StringFilter<Story> {
  accepts(story: Story, search: string): boolean {
    return "" + story.id === search || story.name.toLowerCase().indexOf(search) >= 0;
  }
}