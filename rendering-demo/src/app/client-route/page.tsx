"use client";
import 'client-only'

import { useTheme } from "../@components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";
export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction()
  return (
    <h1 style={{
      color: theme.colors.secondary,
    }}>
      client route {result}
    </h1>  
  );
}