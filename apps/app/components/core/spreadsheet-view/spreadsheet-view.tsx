import React, { useState } from "react";

// next
import { useRouter } from "next/router";

// components
import { SpreadsheetColumns, SpreadsheetIssues } from "components/core";
import { Icon, Spinner } from "components/ui";
// hooks
import useIssuesProperties from "hooks/use-issue-properties";
import useSpreadsheetIssuesView from "hooks/use-spreadsheet-issues-view";
// types
import { ICurrentUserResponse, IIssue, Properties, UserAuth } from "types";
// constants
import { SPREADSHEET_COLUMN } from "constants/spreadsheet";
// icon
import { PlusIcon } from "@heroicons/react/24/outline";

type Props = {
  handleEditIssue: (issue: IIssue) => void;
  handleDeleteIssue: (issue: IIssue) => void;
  user: ICurrentUserResponse | undefined;
  userAuth: UserAuth;
};

export const SpreadsheetView: React.FC<Props> = ({
  handleEditIssue,
  handleDeleteIssue,
  user,
  userAuth,
}) => {
  const [expandedIssues, setExpandedIssues] = useState<string[]>([]);

  const router = useRouter();
  const { workspaceSlug, projectId } = router.query;

  const { spreadsheetIssues } = useSpreadsheetIssuesView();

  const [properties] = useIssuesProperties(workspaceSlug as string, projectId as string);

  const columnData = SPREADSHEET_COLUMN.map((column) => ({
    ...column,
    isActive: properties
      ? column.propertyName === "labels"
        ? properties[column.propertyName as keyof Properties]
        : column.propertyName === "title"
        ? true
        : properties[column.propertyName as keyof Properties]
      : false,
  }));

  const gridTemplateColumns = columnData
    .filter((column) => column.isActive)
    .map((column) => column.colSize)
    .join(" ");

  return (
    <div className="h-full rounded-lg text-brand-secondary overflow-x-auto whitespace-nowrap bg-brand-base">
      <div className="sticky z-[2] top-0 border-b border-brand-base bg-brand-surface-1 w-full min-w-max">
        <SpreadsheetColumns columnData={columnData} gridTemplateColumns={gridTemplateColumns} />
      </div>
      {spreadsheetIssues ? (
        <div className="flex flex-col h-full w-full bg-brand-base rounded-sm ">
          {spreadsheetIssues.map((issue: IIssue, index) => (
            <SpreadsheetIssues
              key={`${issue.id}_${index}`}
              issue={issue}
              expandedIssues={expandedIssues}
              setExpandedIssues={setExpandedIssues}
              gridTemplateColumns={gridTemplateColumns}
              properties={properties}
              handleEditIssue={handleEditIssue}
              handleDeleteIssue={handleDeleteIssue}
              user={user}
              userAuth={userAuth}
            />
          ))}
          <button
            className="flex items-center gap-1.5 pl-7 py-2.5 text-sm text-brand-secondary hover:text-brand-base hover:bg-brand-surface-2 border-b border-brand-base w-full min-w-max"
            onClick={() => {
              const e = new KeyboardEvent("keydown", { key: "c" });
              document.dispatchEvent(e);
            }}
          >
            <PlusIcon className="h-4 w-4" />
            Add Issue
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
