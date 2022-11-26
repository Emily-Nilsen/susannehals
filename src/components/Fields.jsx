import clsx from 'clsx'

const formClasses =
  'block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-none shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-eye-green focus:outline-none focus:ring-4 focus:ring-eye-green/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-eye-green-light dark:focus:ring-eye-green-light/10 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
