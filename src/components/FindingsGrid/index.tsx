import { Finding as FindingModel } from '@prisma/client';
import Finding from '../Finding';

type Props = {
  findings: FindingModel[]
}
export default function FindingsGrid({findings}: Props) {
  return (
    <div className="flex flex-wrap gap-7">
      {findings.map(finding => (
        <Finding
          key={finding.id}
          {...finding}
        />
      ))}
    </div>
  )
}