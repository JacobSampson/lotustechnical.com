import fs from "fs";
import path from "path";
import { IPost } from "../../core/model";

export class PostService {
  static isLocal = process.env.LOCAL == "true";
  static contentDir = path.join(process.cwd(), "content");

  static getAllPostIds(): string[] {
    const fileNames = fs.readdirSync(`${PostService.contentDir}/posts`);
    return fileNames.map((fileName) => {
      return fileName.replace(/\.json$/, "");
    });
  }

  static getPostById(id: string): Promise<IPost> {
    const fullPath = path.join(`${PostService.contentDir}/posts`, `${id}.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const postData = JSON.parse(fileContents);

    // Combine the data with the id and contentHtml
    return {
      id,
      ...postData,
    };
  }
}
