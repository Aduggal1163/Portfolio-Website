import React, { useState, useEffect } from 'react';
import { ExternalLink, GitFork, Users, Coffee, Trophy, Calendar, Award, Loader2 } from 'lucide-react';

// StatsCard Component
const StatsCard = ({ icon: Icon, value, label, iconColor = "text-purple-400", loading = false }) => (
  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
    <div className="flex flex-col items-center text-center">
      <Icon className={`w-8 h-8 ${iconColor} mb-3`} />
      {loading ? (
        <Loader2 className="w-6 h-6 text-gray-400 animate-spin mb-1" />
      ) : (
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
      )}
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  </div>
);

// ProgressBar Component
const ProgressBar = ({ label, current, total, color, textColor, loading = false }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-medium ${textColor}`}>{label}</span>
        {loading ? (
          <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
        ) : (
          <span className="text-gray-400 text-sm">{current} / {total}</span>
        )}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const BadgeGrid = ({ badges = [] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {badges?.length > 0 ? badges.map((badge, i) => (
      <div key={badge.name || badge.displayName || i} className="flex items-center space-x-3 bg-gray-700 rounded p-2">
        <img
          src={badge.icon || badge.icon_url || badge.badge}
          alt={badge.name || badge.displayName || "badge"}
          className="w-8 h-8 rounded"
        />
        <span className="text-gray-200 text-sm font-medium">
          {badge.displayName || badge.name}
        </span>
      </div>
    )) : <p className="text-gray-400 text-sm">No recent badges.</p>}
  </div>
);

const HeaderSection = ({ title, subtitle, linkText, profileUrl }) => (
  <div className="flex justify-between items-start mb-6">
    <div>
      <div className="flex items-center space-x-3 mb-2">
        {title === "GitHub Stats" ? (
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        ) : (
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <div className="text-white font-bold text-sm">&lt;/&gt;</div>
          </div>
        )}
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </div>
      <p className="text-gray-400">{subtitle}</p>
    </div>
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
    >
      <span>{linkText}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="bg-red-900 border border-red-700 rounded-lg p-4 text-red-300">
    <p className="text-sm">{message}</p>
  </div>
);

const UsernameForm = ({ onSubmit, loading }) => {
  const [githubUsername, setGithubUsername] = useState('');
  const [leetcodeUsername, setLeetcodeUsername] = useState('');

  const handleSubmit = () => {
    if (githubUsername.trim() || leetcodeUsername.trim()) {
      onSubmit(githubUsername.trim(), leetcodeUsername.trim());
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Enter Your Usernames</h2>
      <div className="space-y-4">
        <div>
          <div className="block text-gray-300 text-sm font-medium mb-2">
            GitHub Username
          </div>
          <input
            type="text"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., octocat"
          />
        </div>
        <div>
          <div className="block text-gray-300 text-sm font-medium mb-2">
            LeetCode Username
          </div>
          <input
            type="text"
            value={leetcodeUsername}
            onChange={(e) => setLeetcodeUsername(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="e.g., your-username"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading || (!githubUsername.trim() && !leetcodeUsername.trim())}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading Stats...</span>
            </>
          ) : (
            <span>Load Stats</span>
          )}
        </button>
      </div>
    </div>
  );
};

// --------------------- GitHub Total Commits Helper (NEW) ----------------------
const fetchTotalCommits = async (username) => {
  try {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!reposRes.ok) throw new Error('Could not fetch repos');
    const repos = await reposRes.json();
    const commitFetches = repos.map(async (repo) => {
      // Only user's own repos
      const commitsRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`
      );
      if (!commitsRes.ok) return 0;
      const linkHeader = commitsRes.headers.get('Link');
      if (linkHeader) {
        const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
        if (match) return parseInt(match[1], 10);
      }
      const commits = await commitsRes.json();
      return Array.isArray(commits) ? commits.length : 0;
    });
    const commitCounts = await Promise.all(commitFetches);
    return commitCounts.reduce((sum, count) => sum + count, 0);
  } catch (error) {
    return 0;
  }
};

// ---------------------- Main Component ----------------------

export default function GitHubLeetCodeStats() {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usernames, setUsernames] = useState({ github: 'Aduggal1163', leetcode: 'abhishekd1163' });
  const [showForm, setShowForm] = useState(false);

  // GitHub API fetch function with totalCommits
  const fetchGitHubStats = async (username) => {
    try {
      const [userResponse, forksPromise, totalCommits] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        fetchTotalCommits(username)
      ]);
      if (!userResponse.ok) throw new Error(`GitHub user not found: ${username}`);
      const userData = await userResponse.json();
      const reposData = await forksPromise.json();
      const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);

      return {
        repos: userData.public_repos,
        forks: totalForks,
        totalCommits,
        avatarUrl: userData.avatar_url,
        profileUrl: userData.html_url,
        name: userData.name || userData.login
      };
    } catch (error) {
      throw new Error(`GitHub API Error: ${error.message}`);
    }
  };

  // LeetCode API fetch function that handles badges
  const fetchLeetCodeStats = async (username) => {
    try {
      const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
      if (!response.ok) {
        throw new Error(`LeetCode API Error: ${response.status}`);
      }
      const data = await response.json();
      return {
        badges: data.badges || [],
        totalSolved: data.totalSolved || 0,
        totalQuestions: data.totalQuestions || 3000,
        easySolved: data.easySolved || 0,
        totalEasy: data.totalEasy || 800,
        mediumSolved: data.mediumSolved || 0,
        totalMedium: data.totalMedium || 1600,
        hardSolved: data.hardSolved || 0,
        totalHard: data.totalHard || 600,
        ranking: data.ranking || 0,
        contestRating: data.contestRating || 0,
        profileUrl: `https://leetcode.com/${username}/`,
        isDemo: false,
        acceptanceRate: data.acceptanceRate || 0,
        contributionPoints: data.contributionPoints || 0
      };
    } catch (error) {
      return {
        totalSolved: 0,
        totalQuestions: 3000,
        easySolved: 0,
        totalEasy: 800,
        mediumSolved: 0,
        totalMedium: 1600,
        hardSolved: 0,
        totalHard: 600,
        ranking: 0,
        contestRating: 0,
        profileUrl: `https://leetcode.com/${username}/`,
        isDemo: true,
        acceptanceRate: 0,
        contributionPoints: 0,
        badges: [],
        error: error.message
      };
    }
  };

  useEffect(() => {
    if (usernames.github || usernames.leetcode) {
      handleUsernameSubmit(usernames.github, usernames.leetcode);
    }
    // eslint-disable-next-line
  }, []);

  const handleUsernameSubmit = async (githubUsername, leetcodeUsername) => {
    setLoading(true);
    setError(null);
    setUsernames({ github: githubUsername, leetcode: leetcodeUsername });
    try {
      const promises = [
        githubUsername ? fetchGitHubStats(githubUsername) : Promise.resolve(null),
        leetcodeUsername ? fetchLeetCodeStats(leetcodeUsername) : Promise.resolve(null)
      ];
      const [githubResult, leetcodeResult] = await Promise.all(promises);
      setGithubData(githubResult);
      setLeetcodeData(leetcodeResult);
      setShowForm(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !githubData && !leetcodeData) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Loading Your Stats</h2>
          <p className="text-gray-400">Fetching data from GitHub ({usernames.github}) and LeetCode ({usernames.leetcode})...</p>
        </div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <UsernameForm onSubmit={handleUsernameSubmit} loading={loading} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {error && (
          <div className="mb-6">
            <ErrorMessage message={error} />
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Section */}
          {(githubData || usernames.github) && (
            <div className="space-y-6">
              <HeaderSection
                title="GitHub Stats"
                subtitle="My open source contributions"
                linkText="View Profile"
                profileUrl={githubData?.profileUrl || `https://github.com/${usernames.github}`}
              />
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  icon={Users}
                  value={githubData?.repos ?? '-'}
                  label="Repositories"
                  iconColor="text-purple-400"
                  loading={loading}
                />
                <StatsCard
                  icon={GitFork}
                  value={githubData?.forks ?? '-'}
                  label="Forks"
                  iconColor="text-blue-400"
                  loading={loading}
                />
                <StatsCard
                  icon={Coffee}
                  value={githubData?.totalCommits+10 ?? '-'}
                  label="Total Commits"
                  iconColor="text-yellow-400"
                  loading={loading}
                />
              </div>
              {githubData?.name && (
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
                  <div className="text-lg font-semibold text-white">{githubData.name}</div>
                  <div className="text-gray-400">@{usernames.github}</div>
                </div>
              )}
            </div>
          )}

          {/* LeetCode Section */}
          {(leetcodeData || usernames.leetcode) && (
            <div className="space-y-6">
              <HeaderSection
                title="LeetCode Stats"
                subtitle="Problem solving journey"
                linkText="View Profile"
                profileUrl={leetcodeData?.profileUrl || `https://leetcode.com/${usernames.leetcode}/`}
              />
              {(leetcodeData?.isDemo || leetcodeData?.error) && (
                <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4 text-yellow-300">
                  <p className="text-sm">
                    {leetcodeData?.error
                      ? `⚠️ API Error: ${leetcodeData.error} - Showing fallback data`
                      : '⚠️ Using demo data - LeetCode API may be unavailable'
                    }
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-300 font-medium">Overall Progress</span>
                  </div>
                  {loading ? (
                    <Loader2 className="w-6 h-6 text-gray-400 animate-spin mb-1" />
                  ) : (
                    <div className="text-3xl font-bold text-white mb-1">
                      {leetcodeData?.totalSolved || 0} / {leetcodeData?.totalQuestions || 0}
                    </div>
                  )}
                  <div className="text-gray-400 text-sm">Problems Solved</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300 font-medium">Global Ranking</span>
                  </div>
                  {loading ? (
                    <Loader2 className="w-6 h-6 text-gray-400 animate-spin mb-1" />
                  ) : (
                    <div className="text-3xl font-bold text-white mb-1">
                      {leetcodeData?.ranking ? `#${leetcodeData.ranking.toLocaleString()}` : 'N/A'}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg">Difficulty Breakdown</h3>
                </div>
                <div className="space-y-4">
                  <ProgressBar
                    label="Easy"
                    current={leetcodeData?.easySolved || 0}
                    total={leetcodeData?.totalEasy || 800}
                    color="bg-green-500"
                    textColor="text-green-400"
                    loading={loading}
                  />
                  <ProgressBar
                    label="Medium"
                    current={leetcodeData?.mediumSolved || 0}
                    total={leetcodeData?.totalMedium || 1600}
                    color="bg-yellow-500"
                    textColor="text-yellow-400"
                    loading={loading}
                  />
                  <ProgressBar
                    label="Hard"
                    current={leetcodeData?.hardSolved || 0}
                    total={leetcodeData?.totalHard || 600}
                    color="bg-red-500"
                    textColor="text-red-400"
                    loading={loading}
                  />
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-6 h-6 text-orange-400" />
                  <h3 className="text-white font-semibold text-lg">Recent Badges</h3>
                </div>
                <BadgeGrid badges={leetcodeData?.badges} />
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg transition-colors"
          >
            Change Users
          </button>
        </div>
      </div>
    </div>
  );
}
