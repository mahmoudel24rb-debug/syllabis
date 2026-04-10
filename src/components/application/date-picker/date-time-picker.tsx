"use client";

import { useState } from "react";
import { getLocalTimeZone, toCalendarDateTime, today } from "@internationalized/date";
import { Calendar as CalendarIcon, Clock } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import type { DateValue, Key } from "react-aria-components";
import { DatePicker as AriaDatePicker, Dialog as AriaDialog, Group as AriaGroup, Popover as AriaPopover, DateField } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { InputDateBase } from "@/components/base/input/input-date";
import { Select } from "@/components/base/select/select";
import { cx } from "@/utils/cx";
import { Calendar } from "./calendar";

const TIME_SLOTS = Array.from({ length: 17 }, (_, i) => {
    const totalMinutes = 9 * 60 + i * 30;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const label = `${hour}h${minute === 0 ? "00" : "30"}`;
    return { id: `${hour}:${String(minute).padStart(2, "0")}`, hour, minute, label };
});

interface DateTimePickerProps {
    className?: string;
}

export const DateTimePicker = ({ className }: DateTimePickerProps) => {
    const [value, setValue] = useState<DateValue | null>(null);
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(() => toCalendarDateTime(today(getLocalTimeZone())));
    const dateFormatter = useDateFormatter({ day: "numeric", month: "short", year: "numeric" });
    const timeFormatter = useDateFormatter({ hour: "numeric", minute: "numeric", hour12: false });

    const handleTodayClick = () => {
        const t = today(getLocalTimeZone());
        const date = value && "hour" in value ? toCalendarDateTime(t).set({ hour: value.hour, minute: value.minute }) : toCalendarDateTime(t);
        setValue(date);
        setFocusedValue(date);
    };

    const handleTimeClick = (key: Key | null) => {
        const slot = TIME_SLOTS.find((s) => s.id === key);
        if (!slot) return;
        const date = value ?? toCalendarDateTime(today(getLocalTimeZone()));
        setValue(date.set({ hour: slot.hour, minute: slot.minute }));
    };

    return (
        <AriaDatePicker shouldCloseOnSelect={false} aria-label="Date et heure" value={value} onChange={setValue} className={className}>
            <AriaGroup>
                <Button size="md" color="secondary" iconLeading={CalendarIcon} className="w-full justify-start">
                    {value ? (
                        <>
                            {dateFormatter.format(value.toDate(getLocalTimeZone()))}{" "}
                            <span className="text-quaternary">{timeFormatter.format(value.toDate(getLocalTimeZone()))}</span>
                        </>
                    ) : (
                        "Choisir une date et un horaire"
                    )}
                </Button>
            </AriaGroup>
            <AriaPopover
                offset={8}
                placement="bottom start"
                className={({ isEntering, isExiting }) =>
                    cx(
                        "origin-(--trigger-anchor-point) will-change-transform",
                        isEntering && "duration-150 ease-out animate-in fade-in placement-bottom:slide-in-from-top-0.5",
                        isExiting && "duration-100 ease-in animate-out fade-out placement-bottom:slide-out-to-top-0.5",
                    )
                }
            >
                <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                    {({ close }) => (
                        <>
                            <div className="flex">
                                <div className="flex px-6 py-5">
                                    <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue}>
                                        <div className="flex flex-wrap gap-3 md:hidden">
                                            <div className="flex flex-1 gap-3">
                                                <DateField aria-label="Date" granularity="day" className="flex-1">
                                                    <InputDateBase size="sm" className="flex-1" />
                                                </DateField>
                                                <Button slot={null} size="sm" color="secondary" onClick={handleTodayClick}>
                                                    Aujourd&apos;hui
                                                </Button>
                                            </div>
                                            <Select
                                                aria-label="Horaire"
                                                size="sm"
                                                placeholder="Horaire"
                                                icon={Clock}
                                                items={TIME_SLOTS}
                                                value={value && "hour" in value ? `${value.hour}:${String(value.minute).padStart(2, "0")}` : null}
                                                onChange={handleTimeClick}
                                                className="flex-1"
                                            >
                                                {(slot) => (
                                                    <Select.Item id={slot.id} icon={Clock}>
                                                        {slot.label}
                                                    </Select.Item>
                                                )}
                                            </Select>
                                        </div>
                                    </Calendar>
                                </div>
                                <div className="relative hidden min-h-0 w-50 flex-col gap-4 md:flex">
                                    <div className="px-5 pt-6.5 text-center text-sm font-semibold text-fg-secondary">Horaires disponibles</div>
                                    <div className="relative h-full w-full">
                                        <ul className="absolute inset-0 flex min-h-0 flex-col gap-1.5 overflow-y-auto mask-b-from-80% mask-b-to-98% px-5 pb-5">
                                            {TIME_SLOTS.map((slot) => {
                                                const isSelected = value && "hour" in value && value.hour === slot.hour && value.minute === slot.minute;
                                                return (
                                                    <li key={slot.id} className="flex-1">
                                                        <Button
                                                            size="xs"
                                                            color="secondary"
                                                            className={cx("w-full", isSelected && "bg-primary_hover")}
                                                            onClick={() => handleTimeClick(slot.id)}
                                                        >
                                                            {slot.label}
                                                        </Button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 border-t border-secondary p-4">
                                <div className="mr-auto hidden gap-3 md:flex">
                                    <DateField aria-label="Date" granularity="day" className="flex-1">
                                        <InputDateBase size="sm" />
                                    </DateField>
                                    <Button size="sm" color="secondary" onClick={handleTodayClick}>
                                        Aujourd&apos;hui
                                    </Button>
                                </div>
                                <Button size="sm" color="secondary" className="max-md:flex-1" onClick={close}>
                                    Annuler
                                </Button>
                                <Button size="sm" color="primary" className="max-md:flex-1" onClick={close}>
                                    Valider
                                </Button>
                            </div>
                        </>
                    )}
                </AriaDialog>
            </AriaPopover>
        </AriaDatePicker>
    );
};
