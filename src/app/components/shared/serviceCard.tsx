"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Icon } from "@iconify/react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface ExpandableCardProps {
    index: number
    title: string
    icon: string
    content?: React.ReactNode
}

export default function ExpandableCard({
    index,
    title,
    icon,
    content,
}: ExpandableCardProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* === Collapsed Card === */}
            <motion.div
                layoutId={`expandable-card-${index}`}
                onClick={() => setOpen(true)}
                className="cursor-pointer shadow-inovative-card-shadow h-full bg-white dark:bg-dark rounded-lg border gap-6 border-dark/5 dark:border-white/5 flex items-center justify-between p-8 hover:scale-[1.02] transition-transform duration-300"
            >
                <h3 className="text-2xl text-dark dark:text-white font-normal">
                    {title}
                </h3>
                <Icon icon={icon} width={48} height={48} />
            </motion.div>

            {/* === Expanded Modal === */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="p-0 sm:max-w-[650px] bg-transparent border-none shadow-none"
                    onInteractOutside={() => setOpen(false)}
                >
                    <div className="bg-white dark:bg-dark rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-row items-center justify-between px-6 pt-6 pb-3 border-b border-dark/10 dark:border-white/10">
                            <h2 className="text-2xl font-semibold text-dark dark:text-white flex justify-between w-full items-center">
                                {title}
                            </h2>
                        </div>
                        <div className="px-6 pb-6 pt-3 max-h-[70vh] overflow-y-auto">
                            {content ? (
                                <p className="text-base">
                                    {content}
                                </p>
                            ) : (
                                <p className="text-dark/70 dark:text-white/70 leading-relaxed">
                                    {`More about ${title}. You can pass in any JSX or detailed explanation for this service.`}
                                </p>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
