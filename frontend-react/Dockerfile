FROM node:20-alpine
WORKDIR /app
ENV VITE_API_BASE_URL=http://backend:8080
ENV VITE_AI_BASE_URL=http://ai-engine:8000
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
