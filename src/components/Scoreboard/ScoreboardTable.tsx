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
import { Score, useGetScoresQuery } from "./scoreApiSlice";

export const ScoreboardTable = () => {
  const { data } = useGetScoresQuery(1, {
    pollingInterval: 5000,
  });
  let scores: Score[] = data?.scores || [];

  const sortedScores = [...scores].sort(
    (a, b) => b.click_count - a.click_count
  );

  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-4">#</TableHead>
          <TableHead className="text-center">Leaderboard</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedScores.map((s, idx) => {
          const Flag = Flags[s.code as keyof typeof Flags];
          return (
            <TableRow key={s.code}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Flag className="mr-2 w-7 min-w-7 rounded-sm drop-shadow-lg" />
                  <Text variant="p1">{s.country_name}</Text>
                </div>
                {s.click_count}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
