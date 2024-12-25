"use client";
import React from "react";
import { Card as PrimeCard } from "primereact/card";
import Image from "next/image";

export interface CardProps {
  id: string;
  title: string;
  subTitle?: string;
  image: string;
  body: string;
}

export default function Card(props: CardProps) {
  const header = (
    <div className="h-48 relative">
      <Image
        alt="Card"
        src={props.image}
        className="rounded-t"
        fill
        objectFit="cover"
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <PrimeCard
        title={props.title}
        subTitle={props.subTitle}
        header={header}
        className="max-w-sm overflow-hidden"
      >
        <p className="m-0">{props.body}</p>
      </PrimeCard>
    </div>
  );
}
