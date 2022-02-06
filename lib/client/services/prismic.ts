import * as prismic from "@prismicio/client";

const clientId = "https://lotustechnical.prismic.io/api/v2";
const clientSecret = "e3a310790d8eb401c3e2694f48a8fbb9";
const applicationName = "lotus-technical";
const accessToken =
  "MC5ZZXg3a2hFQUFDd0FBU3Z0.Ju-_ve-_vSHvv70U77-977-977-9XRtVaGwB77-977-9fu-_vTzvv73vv70pfu-_ve-_vTEEJu-_ve-_ve-_vQ";

const endpoint = "https://lotustechnical.prismic.io/api/v2";
const client = prismic.createClient(endpoint, {
  accessToken,
});

class PrismicService {
  static async getSingle(id, ...rest) {
    return await client.getSingle(id, ...rest);
  }
}

export default PrismicService;
