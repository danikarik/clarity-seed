import { Comparator } from "clarity-angular";
import { Story } from "../story";

export class StoryComparator implements Comparator<Story> {
  compare(a: Story, b: Story) {
    return a.id - b.id;
  }
}