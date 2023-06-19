import { Finding as FindingModel } from '@prisma/client';
import Finding from '../Finding';

type Props = {
  findings: FindingModel[]
}
export default function ResourcesGrid({findings}: Props) {
  console.log('dentro da resourcesgrid', findings);
  return (
    <div className="flex flex-wrap gap-7">
      {findings.map(finding => (
        <Finding
          key={finding.id}
          link=''
          imageUrl='https://www.achurchconsulting.com/wp-content/uploads/2021/02/remote-work-models.png'
          {...finding}
        />
      ))}
    </div>
  )
}