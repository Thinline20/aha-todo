/// <reference types="astro/client" />

interface Window {
  Alpine: import("alpinejs").Alpine;
}

declare namespace App {
  interface Locals {
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
  }
}
