import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateImagePrompt(name: string) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a creative and helpful AI assistant capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALL·E API to generate a thumbnail. The description should be minimalistic and emphasize that the generated thumbnail should be without text.",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titled "${name}" in plain text with NO formatting whatsoever, no # characters or * characters!`,
        },
      ],
    });

    // You still need to parse the response into a JavaScript object
    const data = await response.json();

    // Ensure choices are returned
    if (!data.choices || data.choices.length === 0) {
      console.log(data);
      console.log("No choices returned from OpenAI API");
      throw new Error("No choices returned from OpenAI API");
    }

    const image_description = data.choices[0].message?.content;
    return image_description as string;
  } catch (error) {
    console.error("Error in generateImagePrompt:", error);
    throw error;
  }
}

export async function generateImage(image_description: string) {
  try {
    const response = await openai.createImage({
      prompt: image_description,
      n: 1,
      size: "256x256",
    });

    // Parse the response body
    const data = await response.json();

    // Make sure the image URL exists
    if (!data.data || data.data.length === 0) {
      console.log("No image generated by DALL·E");
      throw new Error("No image generated by DALL·E");
    }

    const image_url = data.data[0].url;
    return image_url as string;
  } catch (error) {
    console.error("Error in generateImage:", error);
    throw error;
  }
}
