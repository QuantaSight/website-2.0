FROM node:22-alpine

WORKDIR /app

# Install root dependencies first (for caching)
COPY package*.json ./
RUN npm install

# Install frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy the rest of the project
COPY . .

# Expose frontend and backend ports
EXPOSE 5173 3000

CMD ["npm", "run", "dev"]
