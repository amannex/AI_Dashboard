import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_KEY;

export const fetchAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    return response.data.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return "Error fetching AI response";
  }
};
