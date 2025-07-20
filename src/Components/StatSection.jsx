import React from "react";
function StatSection() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Stats</h3>
      <ul className="space-y-2">
        <li>
          <span className="font-semibold">GitHub:</span>
          <a
            href="https://github.com/yourusername"
            className="ml-2 text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            yourusername
          </a>
        </li>
        <li>
          <span className="font-semibold">LeetCode:</span>
          <a
            href="https://leetcode.com/yourusername"
            className="ml-2 text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            yourusername
          </a>
        </li>
      </ul>
    </div>
  );
}

export default StatSection;
