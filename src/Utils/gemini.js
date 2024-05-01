import { GEMINI_KEY } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const gemini = new GoogleGenerativeAI(GEMINI_KEY);

export default gemini;
