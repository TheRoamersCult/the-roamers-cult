"use client";

import { useEffect, useState, use as ReactUse } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  Compass,
  Heart,
} from "lucide-react";

import styles from "./gallery.module.css";

const galleriesData = {
  "secret-waterfall": {
    title: "Secret Waterfall Expedition",
    location: "Gokundi",
    images: [
      { src: "/secretwaterfall/secretwaterfall (1).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (2).JPG", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (9).JPG", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (6).JPG", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (7).JPG", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (3).JPG", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (4).JPG", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (5).JPG", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (8).JPG", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (9).JPG", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (10).JPG", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (11).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (12).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (13).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (14).JPG", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (15).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (16).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (17).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (18).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (19).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (20).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (21).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (22).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (23).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (24).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (25).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (26).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (27).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (28).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (29).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (30).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (31).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (32).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (33).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (34).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (35).JPG", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (36).JPG", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (37).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (38).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (39).jpg", caption: "Unexplored green patches" },

            { src: "/secretwaterfall/secretwaterfall (40).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (41).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (42).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (43).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (44).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (45).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (46).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (47).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (48).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (49).jpg", caption: "Unexplored green patches" },

                  { src: "/secretwaterfall/secretwaterfall (50).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (51).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (52).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (53).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (54).jpg", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (55).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (56).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (57).jpg", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (58).jpg", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (59).jpg", caption: "Unexplored green patches" },

                  { src: "/secretwaterfall/secretwaterfall (60).jpg", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (61).jpg", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (62).JPG", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (63).JPG", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (64).JPG", caption: "Unexplored green patches" },
      { src: "/secretwaterfall/secretwaterfall (65).JPG", caption: "Deep forest trail leading to the secret lagoon" },
      { src: "/secretwaterfall/secretwaterfall (66).JPG", caption: "Cliff jumping moments" },
      { src: "/secretwaterfall/secretwaterfall (67).JPG", caption: "Morning camp vibes" },
      { src: "/secretwaterfall/secretwaterfall (68).JPG", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (69).JPG", caption: "Unexplored green patches" },
            { src: "/secretwaterfall/secretwaterfall (70).JPG", caption: "Group bonding by the stream" },
      { src: "/secretwaterfall/secretwaterfall (71).JPG", caption: "Unexplored green patches" },
    ],
  },
  rajmachi: {
    title: "Rajmachi Fireflies Festival",
    location: "Lonavala, Maharashtra",
    images: [
      { src: "/rajmachi/rajmachi (1).jpg", caption: "Night camping setup under stars" },
      { src: "/rajmachi/rajmachi (2).jpg", caption: "Magical fireflies glowing" },
      { src: "/rajmachi/rajmachi (6).jpg", caption: "Trail exploration" },
      { src: "/rajmachi/rajmachi (7).jpg", caption: "Explorer community group" },
      { src: "/rajmachi/rajmachi (5).jpg", caption: "Morning brew" },

            { src: "/rajmachi/rajmachii (1).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (2).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (3).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (4).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (5).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (6).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (7).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (8).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (9).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (10).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (11).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (12).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (13).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (14).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (15).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (16).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (17).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (18).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (19).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (20).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (21).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (22).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (23).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (24).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (25).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (26).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (27).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (28).jpg", caption: "Morning brew" },
            { src: "/rajmachi/rajmachii (29).jpg", caption: "Morning brew" },
    ],
  },
  kalu: {
    title: "Kalu Waterfall Expedition",
    location: "Malshej Ghat",
    images: [
      { src: "/kalu/kalu (1).jpg", caption: "Majestic view of Kalu waterfall" },
      { src: "/kalu/kalu (2).jpg", caption: "Explorers crossing the stream" },
      { src: "/kalu/kalu (3).jpg", caption: "Tracking through dense woods" },
      { src: "/kalu/kalu (4).jpg", caption: "Team group photo" },

           { src: "/kalu/kalu1 (1).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (2).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (3).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (4).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (5).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (6).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (6).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (7).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (8).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (9).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (10).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (11).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (12).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (13).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (14).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (15).jpg", caption: "Majestic view of Kalu waterfall" },
            { src: "/kalu/kalu1 (16).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (17).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (18).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (19).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (20).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (21).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (22).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (23).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (24).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (25).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (26).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (27).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (28).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (29).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (30).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (31).jpg", caption: "Majestic view of Kalu waterfall" },
            { src: "/kalu/kalu1 (32).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (33).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (34).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (35).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (36).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (37).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (38).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (39).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (40).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (41).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (42).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (43).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (44).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (45).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (46).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (47).jpg", caption: "Majestic view of Kalu waterfall" },
            { src: "/kalu/kalu1 (48).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (49).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (50).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (51).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (52).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (53).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (54).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (55).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (56).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (57).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (58).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (59).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (60).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (61).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (62).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (63).jpg", caption: "Majestic view of Kalu waterfall" },
            { src: "/kalu/kalu1 (64).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (65).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (66).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (67).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (68).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (69).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (70).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (71).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (72).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (73).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (74).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (75).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (76).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (77).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (78).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (79).jpg", caption: "Majestic view of Kalu waterfall" },
                  { src: "/kalu/kalu1 (80).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (81).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (82).jpg", caption: "Majestic view of Kalu waterfall" },
           { src: "/kalu/kalu1 (83).jpg", caption: "Majestic view of Kalu waterfall" },

    ],
  },
  aadrai: {
    title: "Aadrai Forest Trail",
    location: "Malshej Ghat",
    images: [
      // { src: "/aadrai/aadrai (1).jpg", caption: "Dense fog in Aadrai forest" },
      // { src: "/aadrai/aadrai (2).jpg", caption: "Green canopy views" },
      // { src: "/aadrai/aadrai (3).jpg", caption: "Walking through wilderness" },
      // { src: "/aadrai/aadrai (4).jpg", caption: "Monsoon streams" },
      // { src: "/aadrai/aadrai (6).png", caption: "Trail discoveries" },
      //      { src: "/aadrai/aadrai (7).png", caption: "Dense fog in Aadrai forest" },
      // { src: "/aadrai/aadrai (8).png", caption: "Green canopy views" },
      // { src: "/aadrai/aadrai (9).JPG", caption: "Walking through wilderness" },
      // { src: "/aadrai/aadrai (10).jpg", caption: "Monsoon streams" },
      // { src: "/aadrai/aadrai (11).jpg", caption: "Trail discoveries" },
      //      { src: "/aadrai/aadrai (12).jpg", caption: "Dense fog in Aadrai forest" },
      // { src: "/aadrai/aadrai (13).png", caption: "Green canopy views" },
      // { src: "/aadrai/aadrai (14).png", caption: "Walking through wilderness" },
      // { src: "/aadrai/aadrai (15).jpg", caption: "Monsoon streams" },
      // { src: "/aadrai/aadrai (16).JPG", caption: "Trail discoveries" },
      //      { src: "/aadrai/aadrai (17).JPG", caption: "Dense fog in Aadrai forest" },
      // { src: "/aadrai/aadrai (18).jpg", caption: "Green canopy views" },
      // { src: "/aadrai/aadrai (19).jpg", caption: "Walking through wilderness" },
      // { src: "/aadrai/aadrai (20).jpg", caption: "Monsoon streams" },
      // { src: "/aadrai/aadrai (21).JPG", caption: "Trail discoveries" },
      //   { src: "/aadrai/aadrai (22).jpg", caption: "Trail discoveries" },

            { src: "/aadrai/aadrai1 (1).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (2).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (3).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (4).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (5).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (6).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (7).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (8).JPG", caption: "Monsoon streams" },
                        { src: "/aadrai/aadrai1 (9).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (10).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (11).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (12).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (13).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (14).JPG", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (15).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (16).jpg", caption: "Monsoon streams" },
                        { src: "/aadrai/aadrai1 (17).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (18).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (19).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (20).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (21).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (22).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (23).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (24).jpg", caption: "Monsoon streams" },
                        { src: "/aadrai/aadrai1 (25).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (26).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (27).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (28).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (29).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (30).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (31).jpg", caption: "Monsoon streams" },
            { src: "/aadrai/aadrai1 (32).JPG", caption: "Monsoon streams" },
    ],
  },
  "dreamy-waterfall": {
    title: "Hidden Dreamy Waterfall & Blue Lagoon",
    location: "Murud",
    images: [
      { src: "/DreamyW/DW (1).JPG", caption: "The stunning blue lagoon" },
      // { src: "/DreamyW/DW (2).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (3).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (4).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (5).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (6).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (7).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (8).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (9).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (10).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (11).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (12).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (13).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (14).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (15).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (16).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (17).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (18).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (19).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (20).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (21).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (22).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (23).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (24).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (25).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (26).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (27).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (28).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (29).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (30).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (31).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (32).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (33).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (34).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (35).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (36).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (37).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (38).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (39).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (40).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (41).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (42).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (43).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (44).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (45).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (46).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (47).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (48).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (49).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (50).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (51).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (52).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (53).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (54).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (55).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (56).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (57).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (58).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (59).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (60).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (61).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (62).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (63).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (64).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (65).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (66).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (67).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (68).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (69).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (70).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (71).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (72).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (73).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (74).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (75).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (76).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (77).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (78).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (79).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (80).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (81).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (82).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (83).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (84).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (85).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (86).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (87).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (88).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (89).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (90).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (91).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (92).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (93).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (94).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (95).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (96).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (97).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (98).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (99).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (100).JPG", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (101).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (102).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (103).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (104).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (105).JPG", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (106).JPG", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (107).JPG", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (108).JPG", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (109).JPG", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (110).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (111).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (112).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (113).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (114).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (115).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (116).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (117).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (118).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (119).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (120).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (121).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (122).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (123).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (124).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (125).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (126).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (127).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (128).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (129).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (130).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (131).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (132).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (133).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (134).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (135).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (136).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (137).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (138).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (139).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (140).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (141).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (142).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (143).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (144).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (145).jpg", caption: "Peaceful forest path" },

      { src: "/DreamyW/DW (146).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (147).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (148).jpg", caption: "Greenery surroundings" },
      { src: "/DreamyW/DW (149).jpg", caption: "Explorers enjoying lagoon" },
      { src: "/DreamyW/DW (150).jpg", caption: "Peaceful forest path" },
      { src: "/DreamyW/DW (151).jpg", caption: "The stunning blue lagoon" },
      { src: "/DreamyW/DW (152).jpg", caption: "Waterfall stream flow" },
      { src: "/DreamyW/DW (153).jpg", caption: "Greenery surroundings" },
      // { src: "/DreamyW/DW (154).jpg", caption: "Explorers enjoying lagoon" },
      // { src: "/DreamyW/DW (155).jpg", caption: "Peaceful forest path" },
    ],
  },
  harishchandragad: {
    title: "Harishchandragad Trek",
    location: "Malshej Ghat",
    images: [
      { src: "/harishchandragad/harishc (34).jpg", caption: "Konkan Kada breathtaking cliff view" },
      { src: "/harishchandragad/harishc (36).jpg", caption: "Trekking towards the peak" },
      { src: "/harishchandragad/harishc (19).jpg", caption: "Ancient rock-cut caves" },
      { src: "/harishchandragad/harishc (7).jpg", caption: "Sunset from the fort" },
      { src: "/harishchandragad/harishc (37).jpg", caption: "Summit celebration" },
    ],
  },
};

export default function GalleryPage({ params }) {
  const resolvedParams = ReactUse(params);
  const tourId = resolvedParams?.id || "secret-waterfall";
  const currentGallery = galleriesData[tourId] || galleriesData["secret-waterfall"];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const images = currentGallery.images;
  const totalImages = images.length;

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current + 1) % totalImages));
  };

  const previousImage = () => {
    setActiveImageIndex((current) => (current === null ? 0 : (current - 1 + totalImages) % totalImages));
  };

  useEffect(() => {
    if (activeImageIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyboard = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            {/* <Link href="/story" className={styles.backBtn}>
              <ArrowLeft size={15} />
              <span>Back to Stories</span>
            </Link>

            <div className={styles.badge}>
              <Sparkles size={11} />
              <span>Official Visual Archive</span>
            </div> */}
          </div>

          <div className={styles.heading}>
            <span className={styles.eyebrow}>THE ROAMERS CULT</span>
            <h1>{currentGallery.title}</h1>
            <div className={styles.location}>
              <MapPin size={13} />
              <span>{currentGallery.location}</span>
            </div>
            <div className={styles.count}>{totalImages} Captured Moments</div>
          </div>
        </header>

        {/* MODERN MASONRY GRID */}
        <section className={styles.galleryGrid}>
          {images.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className={`${styles.galleryItem} ${styles[`item${index % 6}`]}`}
              onClick={() => openLightbox(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openLightbox(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, 33vw"
                  className={styles.galleryImg}
                />
                <div className={styles.imageGradient} />
                <div className={styles.imageNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.galleryOverlay}>
                  <div className={styles.zoomIcon}>
                    <Maximize2 size={13} />
                  </div>
                  <div className={styles.captionBox}>
                    <span>VIEW MOMENT</span>
                    <p>{image.caption}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxCounter}>
            <strong>{String(activeImageIndex + 1).padStart(2, "0")}</strong>
            <span>/</span>
            {String(totalImages).padStart(2, "0")}
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          {totalImages > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <div className={styles.lightboxImageBox}>
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].caption}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.lightboxInfo}>
              <div className={styles.lightboxText}>
                <span>THE ROAMERS CULT</span>
                <p>{images[activeImageIndex].caption}</p>
              </div>
              <div className={styles.lightboxLocation}>
                <MapPin size={12} />
                {currentGallery.location}
              </div>
            </div>
          </div>

          {totalImages > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>THE ROAMERS CULT</h3>
            <p>Crafting unforgettable outdoor adventures, soulful trails, and lifetime memories across the Sahyadris and beyond.</p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Explore</h4>
            <Link href="/tours">All Tours</Link>
            <Link href="/story">Our Stories</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>Safety & Trust</h4>
            <span><ShieldCheck size={13} /> Verified Leaders</span>
            <span><Compass size={13} /> Curated Adventures</span>
            <span><Heart size={13} /> Happy Explorers</span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} The Roamers Cult. All rights reserved.</p>
          <span>ADVENTURE • EXPLORE • REMEMBER</span>
        </div>
      </footer>
    </div>
  );
}