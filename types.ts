import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface AiConceptRequest {
  eventType: string;
  theme: string;
  guestCount: number;
}

export interface AiConceptResponse {
  title: string;
  concept: string;
  highlights: string[];
}