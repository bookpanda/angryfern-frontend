import { useAppSelector } from "@/store/hooks";
import Flags from "country-flag-icons/react/3x2";
import { Text } from "../custom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { selectAll } from "./scoreboardSlice";
import { codeToName } from "./types";

export const ScoreboardTable = () => {
  const scores = useAppSelector((state) => selectAll(state));

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-4">#</TableHead>
          <TableHead className="text-center">Leaderboard</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(scores).map(([code, score], idx) => {
          const Flag = Flags[code as keyof typeof Flags];
          return (
            <TableRow key={code}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell className="flex items-center">
                <Flag className="mr-2 w-7 min-w-7 rounded-sm drop-shadow-lg" />
                <Text variant="p1">
                  {codeToName[code as keyof typeof codeToName]}
                </Text>
              </TableCell>
              <TableCell>{score}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
