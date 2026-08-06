const roles = [
  "Cybersecurity",
  "AWS Cloud",
  "Network Engineering",
  "Software Engineering",
];

export default function RotatingRole() {
  return (
    <span
      className="rotating-role"
      aria-label="Cybersecurity, AWS Cloud, Network Engineering and Software Engineering"
    >
      {roles.map((role, index) => (
        <span
          className="rotating-role-item"
          key={role}
          aria-hidden="true"
          style={{
            animationDelay: `${index * 2.6}s`,
          }}
        >
          {role}
        </span>
      ))}
    </span>
  );
}
